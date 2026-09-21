const knex = require("../db/connection");

function list() {
    return knex("tourReservation").select("*");
}

function create(newTourReservation) {
    return knex("tourReservation")
        .insert(newTourReservation)
        .returning("*")
        .then((createdReservation) => createdReservation[0]);
}

function read(tourReservation_id) {
    return knex("tourReservation")
        .select("*")
        .where({tourReservation_id: tourReservation_id})
        .then((tourReservation) => tourReservation[0]);
}

module.exports = {
    list,
    create,
    read,
};