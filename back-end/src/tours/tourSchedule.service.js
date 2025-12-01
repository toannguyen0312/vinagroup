const knex = require("../db/connection");

/**
 * List all tour schedules
 */
function list() {
  return knex("tourSchedule").select("*");
}

/**
 * Read a specific tour schedule by ID
 */
function read(tourScheduleId) {
  return knex("tourSchedule").select("*").where({ tourSchedule_id: tourScheduleId }).first();
}

/**
 * Create a new tour schedule
 */
function create(newTourSchedule) {
  // Map Vietnamese field names to English database column names
  const mappedData = {
    tour_id: parseInt(newTourSchedule.tour_id), // Use the selected tour_id
    lich_trinh: newTourSchedule.lichTrinh, // Map lich trinh field
    start_date: newTourSchedule.ngayXuatPhat,
    end_date: newTourSchedule.ngayKetThuc,
    price: parseFloat(newTourSchedule.giaTien)
    // Removed available_slots as it's not in the new schema
  };
  
  return knex("tourSchedule")
    .insert(mappedData)
    .returning("*")
    .then((records) => records[0]);
}

/**
 * Update an existing tour schedule
 */
function update(updatedTourSchedule) {
  // Map Vietnamese field names to English database column names
  const mappedData = {
    tour_id: updatedTourSchedule.tour_id,
    lich_trinh: updatedTourSchedule.lichTrinh, // Map lich trinh field
    start_date: updatedTourSchedule.ngayXuatPhat,
    end_date: updatedTourSchedule.ngayKetThuc,
    price: parseFloat(updatedTourSchedule.giaTien)
    // Removed available_slots as it's not in the new schema
  };
  
  return knex("tourSchedule")
    .select("*")
    .where({ tourSchedule_id: updatedTourSchedule.id })
    .update(mappedData, "*")
    .then((records) => records[0]);
}

/**
 * Delete a tour schedule
 */
function destroy(tourScheduleId) {
  return knex("tourSchedule").where({ tourSchedule_id: tourScheduleId }).del();
}

/**
 * List tour schedules for a specific tour
 */
function listByTourId(tourId) {
  return knex("tourSchedule").select("*").where({ tour_id: tourId });
}

module.exports = {
  list,
  read,
  create,
  update,
  destroy,
  listByTourId,
};
