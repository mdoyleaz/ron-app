defmodule Api.Data.Quote do
  use Ecto.Schema
  import Ecto.Changeset

  schema "quotes" do
    field :average, :integer
    field :quote, :string

    timestamps()
  end

  @doc false
  def changeset(quote, attrs) do
    quote
    |> cast(attrs, [:quote, :average])
    |> validate_required([:quote, :average])
  end
end
