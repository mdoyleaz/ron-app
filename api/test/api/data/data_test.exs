defmodule Api.DataTest do
  use Api.DataCase

  alias Api.Data

  describe "quotes" do
    alias Api.Data.Quote

    @valid_attrs %{average: 42, quote: "some quote"}
    @update_attrs %{average: 43, quote: "some updated quote"}
    @invalid_attrs %{average: nil, quote: nil}

    def quote_fixture(attrs \\ %{}) do
      {:ok, quote} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Data.create_quote()

      quote
    end

    test "list_quotes/0 returns all quotes" do
      quote = quote_fixture()
      assert Data.list_quotes() == [quote]
    end

    test "get_quote!/1 returns the quote with given id" do
      quote = quote_fixture()
      assert Data.get_quote!(quote.id) == quote
    end

    test "create_quote/1 with valid data creates a quote" do
      assert {:ok, %Quote{} = quote} = Data.create_quote(@valid_attrs)
      assert quote.average == 42
      assert quote.quote == "some quote"
    end

    test "create_quote/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Data.create_quote(@invalid_attrs)
    end

    test "update_quote/2 with valid data updates the quote" do
      quote = quote_fixture()
      assert {:ok, %Quote{} = quote} = Data.update_quote(quote, @update_attrs)
      assert quote.average == 43
      assert quote.quote == "some updated quote"
    end

    test "update_quote/2 with invalid data returns error changeset" do
      quote = quote_fixture()
      assert {:error, %Ecto.Changeset{}} = Data.update_quote(quote, @invalid_attrs)
      assert quote == Data.get_quote!(quote.id)
    end

    test "delete_quote/1 deletes the quote" do
      quote = quote_fixture()
      assert {:ok, %Quote{}} = Data.delete_quote(quote)
      assert_raise Ecto.NoResultsError, fn -> Data.get_quote!(quote.id) end
    end

    test "change_quote/1 returns a quote changeset" do
      quote = quote_fixture()
      assert %Ecto.Changeset{} = Data.change_quote(quote)
    end
  end
end
