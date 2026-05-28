/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("tours", (table) => {
    table.integer("region_id").unsigned();

    table.text("tour_short_description");
    table.integer("tour_remaining_seat").notNullable().defaultTo(0);
    table.decimal("tour_price", 10, 2).notNullable().defaultTo(0);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("tours", (table) => {
    table.dropColumn("region_id")
    table.dropColumn("tour_short_description");
    table.dropColumn("tour_remaining_seat");
    table.dropColumn("tour_price");
  })
};
