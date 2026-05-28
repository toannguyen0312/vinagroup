/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("region", (table) => {
        table.increments("region_id").primary();
        table.string("region_name", 255).notNullable();
        table.string("region_slug", 255).notNullable().unique();
        table.timestamps(true, true);
    })
    .then(() => {
      return knex.schema.alterTable("tours", (table) => {
        table
          .foreign("region_id")
          .references("region_id")
          .inTable("region")
          .onDelete("CASCADE");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("tours", (table) => {
    table.dropForeign(["region_id"]);
  })
  .then(() => knex.schema.dropTable("region"));
};
