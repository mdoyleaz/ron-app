use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :api, ApiWeb.Endpoint,
  secret_key_base: "S2deMgpPV7+4o94/5yy6ywVn3WdX6+hqj8m8ajvj+YJ3TyBclvVigim5VZPaBJh4"

# Configure your database
config :api, Api.Repo,
  username: "postgres",
  password: "postgres",
  database: "api_prod",
  pool_size: 15
