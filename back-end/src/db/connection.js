const env = process.env.NODE_ENV || "development";

const config = require("../..knex")[env];

const knex = require("knex")(config);