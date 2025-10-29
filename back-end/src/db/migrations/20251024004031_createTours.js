exports.up = function(knex) {
  return knex.schema.createTable("tours", (table) => {
    table.increments("tour_id").primary();
    table.string("tour_name", 255).notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("tours");
};
