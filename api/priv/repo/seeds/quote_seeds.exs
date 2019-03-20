alias Api.Repo
alias Api.Data.Quote

results = Jason.decode!(HTTPoison.get!('https://ron-swanson-quotes.herokuapp.com/v2/quotes/58').body)

Enum.each results, fn(q) ->
  Repo.insert! %Quote {
    quote: q,
    average: 0
  }
end
