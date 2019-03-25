#!/bin/sh
set -e
# Wait for Postgres to become available.
until psql -h db -U "postgres" -c '\q' 2>/dev/null; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

mix deps.get
mix ecto.create
mix ecto.migrate

if !(test -f seeds_built)
then
mix archive.install hex phx_new 1.4.2
mix run priv/repo/seeds/quote_seeds.exs
touch seeds_built
fi

mix phx.server
