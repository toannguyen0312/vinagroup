const knex = require("../db/connection");

/**
 * List all tours
 */
function list() {
  return knex("tours").select("*");
}

/**
 * Read a specific tour by ID
 */
function read(tourId) {
  return knex("tours").select("*").where({ tour_id: tourId }).first();
}

/**
 * Create a new tour
 */
function create(newTour) {
  return knex("tours")
    .insert(newTour)
    .returning("*")
    .then((records) => records[0]);
}

/**
 * Update an existing tour
 */
function update(updatedTour) {
  return knex("tours")
    .select("*")
    .where({ tour_id: updatedTour.id })
    .update(updatedTour, "*")
    .then((records) => records[0]);
}

/**
 * Delete a tour
 */
function destroy(tourId) {
  return knex("tours").where({ tour_id: tourId }).del();
}

module.exports = {
  list,
  read,
  create,
  update,
  destroy,
};