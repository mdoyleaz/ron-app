FROM elixir
RUN apt-get update && apt-get install --yes postgresql-client
RUN apt-get install --yes inotify-tools

RUN mkdir /app
COPY . /app
WORKDIR /app


RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install hex phx_new 1.4.2

RUN pwd
RUN ls
