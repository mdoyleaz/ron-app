defmodule Api.Data do
  @moduledoc """
  The Data context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Data.Quote

  @doc """
  Returns the list of quotes.

  ## Examples

      iex> list_quotes()
      [%Quote{}, ...]

  """
  def list_quotes do
    Repo.all(Quote)
  end

  @doc """
  Returns the list of quotes filtered by sentence length

  ## Examples

      iex> list_quotes_by_length()
      [%Quote{}, ...]

  """
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

  @doc """
  Gets a single quote.

  Raises `Ecto.NoResultsError` if the Quote does not exist.

  ## Examples

      iex> get_quote!(123)
      %Quote{}

      iex> get_quote!(456)
      ** (Ecto.NoResultsError)

  """
  def get_quote!(id), do: Repo.get!(Quote, id)

  @doc """
  Creates a quote.

  ## Examples

      iex> create_quote(%{field: value})
      {:ok, %Quote{}}

      iex> create_quote(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_quote(attrs \\ %{}) do
    %Quote{}
    |> Quote.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a quote.

  ## Examples

      iex> update_quote(quote, %{field: new_value})
      {:ok, %Quote{}}

      iex> update_quote(quote, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_quote(%Quote{} = quote, attrs) do
    quote
    |> Quote.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Quote.

  ## Examples

      iex> delete_quote(quote)
      {:ok, %Quote{}}

      iex> delete_quote(quote)
      {:error, %Ecto.Changeset{}}

  """
  def delete_quote(%Quote{} = quote) do
    Repo.delete(quote)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking quote changes.

  ## Examples

      iex> change_quote(quote)
      %Ecto.Changeset{source: %Quote{}}

  """
  def change_quote(%Quote{} = quote) do
    Quote.changeset(quote, %{})
  end
end
