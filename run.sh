#!/bin/sh

set -e
# Wait for Postgres to become available.
until psql -h localhost -U "postgres" -c '\q' 2>/dev/null; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

# cd /app/api
mix ecto.create
mix ecto.migrate
mix phx.server
