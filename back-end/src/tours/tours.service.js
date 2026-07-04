const knex = require("../db/connection");

function toSlug(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * List all tours
 */
function list() {
  return knex("tours").select("*");
}

/**
 * Read a specific tour by region and tourName (supports full name or slug)
 */
async function read(region, tourName) {
  const decodedRegion = decodeURIComponent(region || "");
  const decodedTourName = decodeURIComponent(tourName || "");
  const normalizedQuerySlug = toSlug(decodedTourName);

  const records = await knex("tours as t")
    .leftJoin("region as r", "t.region_id", "r.region_id")
    .select("t.*")
    .modify((queryBuilder) => {
      if (decodedRegion) {
        queryBuilder.where("r.region_slug", decodedRegion);
      }
    });

  return (
    records.find((tour) => {
      const tourSlug = toSlug(tour.tour_name || "");
      return (
        (tour.tour_name || "") === decodedTourName ||
        tourSlug === normalizedQuerySlug ||
        (normalizedQuerySlug && tourSlug.startsWith(`${normalizedQuerySlug}-`))
      );
    }) || null
  );
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