defmodule Api.Repo.Migrations.CreateQuotes do
  use Ecto.Migration

  def change do
    create table(:quotes) do
      add :quote, :string
      add :rating, {:array, :integer}
      add :sentenceLength, :integer

      timestamps()
    end

  end
end
