defmodule Api.Data.Quote do
  use Ecto.Schema
  import Ecto.Changeset

  schema "quotes" do
    field :quote, :string
    field :rating, {:array, :integer}
    field :sentenceLength, :integer

    timestamps()
  end

  @doc false
  def changeset(quote, attrs) do
    quote
    |> cast(attrs, [:quote, :rating, :sentenceLength])
    |> validate_required([:quote, :rating, :sentenceLength])
  end
end
