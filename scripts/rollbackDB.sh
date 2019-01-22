#!/bin/bash 

ENV=$1

docker-compose run --rm diving knex migrate:rollback --env $ENV --knexfile ./src/postgres/knexfile.js
