const toursData = require("./01-tours.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE tours RESTART IDENTITY CASCADE")
    .then(() => knex("tours").insert(toursData));
};