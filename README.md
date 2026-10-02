# catalog-mongodb-template

A minimal **MongoDB** starter for DayZer0 catalog briefs. The deliverable on these
briefs is the data work itself — the document model, its validators, the aggregation
pipelines and the indexes — authored as [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/)
scripts and reviewed as a pull request. There is no application framework and no web server.

This repository already carries a working connection check and a tiny seed starter so you
can confirm your toolchain before you write a line of your own.

## Stack

- MongoDB Community (local server) + the `mongosh` shell. Nothing else.
- Scripts live in `scripts/` and are run with `mongosh`.

## Run it

Start your local MongoDB server, then from the repo root:

```bash
# health check — connects and pings the server, prints "ping: ok"
mongosh "mongodb://localhost:27017/dayzero" scripts/ping.js

# seed starter — creates an `examples` collection with a validator and one document
mongosh "mongodb://localhost:27017/dayzero" scripts/seed.js
```

If `ping.js` prints `ping: ok`, your server and shell are talking to each other and you are
ready to start the first ticket.

## Where your work goes

`scripts/seed.js` is only an example of the shape — a collection, a `$jsonSchema` validator,
one insert. Build your brief's own model, queries and indexes as new scripts in `scripts/`,
one ticket per branch and pull request. You do not need to keep `examples`.
