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

module.exports = {
    list,
    create,
};