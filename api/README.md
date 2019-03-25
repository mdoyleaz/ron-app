# Project Notes - Backend API

I decided to give Elixir and Phoenix as the web framework a shot as it was listed as the preferred language in the instructions. This is my first time using Elixir, before this I wasn't even familiar with the language so this has definitely been a learning experience.


### Built a database table to store `Quotes, Sentence Length, Rating`

I used the built in Ecto functionality in Phoenix to build my database table to store the quotes and ratings.

I used the following shell command to to build my table

```bash
mix phx.gen.json Data Quote quotes quote:string rating:array:integer sentenceLength:integer
```
---

### Accepting the JSON data from the `Ron Swanson quotes API`

I decided to take an easy route with this, and just pull all of the quotes into the database from the beginning, instead of having the API called each time by the frontend. I understand this wouldn't be ideal in a production project, but in this case it allowed me to store the quotes and provide the ability to filter than by sentence length in the backend.

### Datbase Seeds
Location: `api/priv/repo/seeds/quote_seeds.exs`

I created a seed to feed these into my database with Phoenix

I pulled in the results using the `HTTPoision library` and used `Jason` to decode it to a data type readable by Elixir

I also added a bit of code to determine the word length, so that we can easily query results by the number of words.

```elixir
results = Jason.decode!(HTTPoison.get!('https://ron-swanson-quotes.herokuapp.com/v2/quotes/58').body)

Enum.each results, fn(q) ->
  Repo.insert! %Quote {
    quote: q,
    sentenceLength: length(String.split(q, " ")),
    rating: []
  }
end
```


### Views
Location: `api/lib/views/quote_view.ex`

I modified the render method in this view to calculate and return the average rating of the quote.

```elixir
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
```

I also added a view to return data regarding if the API accepted the ratings provided by the client.

```elixir
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
```

---

### Returning results by sentence length

To handle the queries for returning data by the provided sentence size, `small, medium and large`, I created a function in the `quote_controller.ex` as well as added some code to filter the queries based on the requested size.


#### Contoller

Location: `api/lib/api_web/controllers/quote_controller.ex`

```elixir
def sentence_length(conn, %{"length" => sentence_size}) do
  quotes = Data.list_quotes_by_length(sentence_size)
  render(conn, "index.json", quotes: quotes)
end
```

This `sentence_length` function calls a query located which contains a couple of private functions which handle a null value and one that possesses a case statement to provide the conditional statements to be passed to `Repo.all()`


#### Database Filters

Location: `api/lib/api/data.ex`:
```elixir
def list_quotes_by_length(sentence_size \\ nil) do
  Quote
  |> filter_quote_length(sentence_size)
  |> Repo.all()
end

defp filter_quote_length(query, nil), do: query
defp filter_quote_length(query, sentence_size) do
  case sentence_size do
    "small" -> where(query, [p], p.sentenceLength <= 4)
    "medium" -> where(query, [p], p.sentenceLength >= 5 and p.sentenceLength <= 12)
    "large" -> where(query, [p], p.sentenceLength >= 13)
  end
end
```
