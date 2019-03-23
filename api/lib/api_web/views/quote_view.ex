defmodule ApiWeb.QuoteView do
  use ApiWeb, :view
  alias ApiWeb.QuoteView

  def render("index.json", %{quotes: quotes}) do
    render_many(quotes, QuoteView, "quote.json")
  end

  def render("show.json", %{quote: quote}) do
    render_one(quote, QuoteView, "quote.json")
  end

  def render("quote.json", %{quote: quote}) do
    %{
      id: quote.id,
      quote: quote.quote,
      rating:
        if(length(quote.rating) === 0,
          do: 0,
          else: Float.round(Enum.sum(quote.rating) / length(quote.rating), 2)
        ),
      sentenceLength: quote.sentenceLength
    }
  end

  def render("rating_accepted.json", %{rating: rating}) do
    if rating < 0 or rating > 5 do
      %{
        error: "rating out of bounds, use 1-5"
      }
    else
      %{
        accepted: "rating accepted"
      }
    end
  end
end
