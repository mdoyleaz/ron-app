FROM elixir
RUN apt-get update && apt-get install --yes postgresql-client
RUN apt-get install --yes inotify-tools

RUN mkdir /app
COPY run.sh /app

RUN mix local.hex --force
RUN mix archive.install hex phx_new 1.4.2
RUN mix local.rebar --force

WORKDIR /app
EXPOSE 4000
