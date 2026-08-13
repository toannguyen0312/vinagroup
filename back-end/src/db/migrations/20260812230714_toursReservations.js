exports.up = function(knex) {
  return knex.schema.createTable("tourReservation", (table) => {
    table.increments("tourReservation_id").primary();
    table.integer("tourSchedule_id").unsigned().notNullable();
    table.integer("adultCount").notNullable();
    table.integer("childCount");
    table.string("name");
    table.string("mobile_number");
    table.string("email");
    table.string("address");
    table.timestamps(true, true);

    table.foreign("tourSchedule_id").references("tourSchedule_id").inTable("tourSchedule");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tourReservation");
};
