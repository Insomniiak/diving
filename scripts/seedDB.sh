#!/bin/bash

ENV=$1

docker-compose run --rm diving knex seed:run --env $ENV --knexfile ./src/postgres/knexfile.js
