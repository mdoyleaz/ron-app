defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api

    resources "/quotes", QuoteController, only: [:index, :show]
    # get "quotes/:id", QuoteController, :show
  end
end
