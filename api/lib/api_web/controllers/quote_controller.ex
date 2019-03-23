defmodule ApiWeb.QuoteController do
  use ApiWeb, :controller

  alias Api.Data
  alias Api.Data.Quote

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    quotes = Data.list_quotes()
    render(conn, "index.json", quotes: quotes)
  end

  def show(conn, %{"id" => id}) do
    quote = Data.get_quote!(id)
    render(conn, "show.json", quote: quote)
  end

  def sentence_length(conn, %{"length" => sentence_size}) do
    quotes = Data.list_quotes_by_length(sentence_size)
    render(conn, "index.json", quotes: quotes)
  end

  def update_rating(conn, %{"id" => id, "rating" => rating}) do
    if rating < 0 or rating > 5 do
      render(conn, "rating_accepted.json", rating: rating)
    else
      quote = Data.get_quote!(id)

      appended_rating = quote.rating ++ [rating]
      Data.update_quote(quote, %{"rating" => appended_rating})

      render(conn, "rating_accepted.json", rating: rating)
    end
  end
end
