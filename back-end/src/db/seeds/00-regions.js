const regionsData = require("./00-regions.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE region RESTART IDENTITY CASCADE")
    .then(() => knex("region").insert(regionsData));
};