defmodule ApiWeb.QuoteControllerTest do
  use ApiWeb.ConnCase

  alias Api.Data
  alias Api.Data.Quote

  @create_attrs %{
    quote: "some quote",
    rating: [],
    sentenceLength: 42
  }
  @update_attrs %{
    quote: "some updated quote",
    rating: [],
    sentenceLength: 43
  }
  @invalid_attrs %{quote: nil, rating: nil, sentenceLength: nil}

  def fixture(:quote) do
    {:ok, quote} = Data.create_quote(@create_attrs)
    quote
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all quotes", %{conn: conn} do
      conn = get(conn, Routes.quote_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create quote" do
    test "renders quote when data is valid", %{conn: conn} do
      conn = post(conn, Routes.quote_path(conn, :create), quote: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.quote_path(conn, :show, id))

      assert %{
               "id" => id,
               "quote" => "some quote",
               "rating" => [],
               "sentenceLength" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.quote_path(conn, :create), quote: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update quote" do
    setup [:create_quote]

    test "renders quote when data is valid", %{conn: conn, quote: %Quote{id: id} = quote} do
      conn = put(conn, Routes.quote_path(conn, :update, quote), quote: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.quote_path(conn, :show, id))

      assert %{
               "id" => id,
               "quote" => "some updated quote",
               "rating" => [],
               "sentenceLength" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, quote: quote} do
      conn = put(conn, Routes.quote_path(conn, :update, quote), quote: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete quote" do
    setup [:create_quote]

    test "deletes chosen quote", %{conn: conn, quote: quote} do
      conn = delete(conn, Routes.quote_path(conn, :delete, quote))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.quote_path(conn, :show, quote))
      end
    end
  end

  defp create_quote(_) do
    quote = fixture(:quote)
    {:ok, quote: quote}
  end
end
