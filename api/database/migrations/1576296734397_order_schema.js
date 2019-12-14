"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderSchema extends Schema {
  up() {
    this.create("orders", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.decimal("freight", 10, 2);
      table.decimal("total_products", 10, 2);
      table.decimal("discount", 10, 2);
      table.decimal("total", 10, 2);
      table.text("note");
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrderSchema;
