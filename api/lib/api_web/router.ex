defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug CORSPlug, origins: ["*"]
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api

    resources "/quotes", QuoteController, only: [:index, :show]
    get "/quotes/length/:length", QuoteController, :sentence_length
    post "/quotes/rate", QuoteController, :update_rating
  end
end
