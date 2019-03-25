#!/bin/sh
set -e
# Wait for Postgres to become available.
until psql -h db -U "postgres" -c '\q' 2>/dev/null; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done


mix ecto.create
mix ecto.migrate

if !(test -f seeds_built)
then
mix run priv/repo/seeds/quote_seeds.exs
touch seeds_built
fi

mix phx.server
