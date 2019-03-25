# Putting it all together

To put the project together I wrapped it all into three separate docker containers, one for the postgres database, the Phoenix back end and one for the React front end.

##### Building the containers
Since I went with using a `docker-compose.yml` file, we can simply run the following to build the containers

```bash
docker-compose build
```

Once we receive word that the containers are build we can run the following to start them up.

``` bash
docker-compose up
```
# API Endpoints
There are only a few endpoints here, but they are as follows.

##### Get all quotes from database
Method: `GET`

Endpoint: `http://url:4000/api/quotes`

Response:
``` 
[
  {
"id": 52, -> "integer"
"quote": "Quote", -> "string"
"rating": 0, -> "integer"
"sentenceLength": 10 -> "integer"
},
...
]
```
##### Get a single quote by `id`
Method: `GET`

Endpoint: `http://url:4000/api/quotes/<id>`

Response:
```
{
"id": 52, -> "integer"
"quote": "Quote", -> "string"
"rating": 0, -> "integer"
"sentenceLength": 10 -> "integer"
}
```

##### Get list of quotes by size
Method: `GET`

Endpoint: `http://url:4000/api/quotes/length/<option>`

Options: [`small`, `medium`, `large`]

Response:
```
[
  {
"id": 52, -> "integer"
"quote": "Quote", -> "string"
"rating": 0, -> "integer"
"sentenceLength": 10 -> "integer"
},
...
]
```

##### Rate a quote
Method: `POST`

Endpoint: `http://url:4000/api/quotes/rate`

Restrictions: `rating` must be a number between 1 and 5

Payload:
```
{
  id: 'quote id', -> "integer"
  "rating": quote_rating -> "integer"
}
```
Response:
```
{
    "accepted": "rating accepted"
}
```


### Notes

This was my first experience with using Elixir, prior to this I wasn't really aware of the language, but it was pretty fun to learn. It is quite a bit different than any other language that I have worked with previously due to it being a functional language. I hope to work with it quite a bit more, because once I got the hang of it, it started to come together.


These are all running under development servers, I didn't have time to figure out how to push Phoenix to a production build.
