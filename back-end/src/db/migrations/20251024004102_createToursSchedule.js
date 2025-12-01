exports.up = function(knex) {
  return knex.schema.createTable("tourSchedule", (table) => {
    table.increments("tourSchedule_id").primary();
    table.integer("tour_id").unsigned().notNullable();
    table.text("lich_trinh").notNullable();
    table.date("start_date").notNullable();
    table.date("end_date").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.timestamps(true, true);
    
    // Foreign key constraint
    table.foreign("tour_id").references("tour_id").inTable("tours");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tourSchedule");
};