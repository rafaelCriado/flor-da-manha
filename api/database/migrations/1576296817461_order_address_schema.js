"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderAddressSchema extends Schema {
  up() {
    this.create("order_addresses", table => {
      table.increments();
      table
        .integer("order_id")
        .unsigned()
        .references("id")
        .inTable("orders");
      table.string("street");
      table.string("neighborhood");
      table.string("city");
      table.string("state");
      table.string("zip_code");
      table.string("complement");
      table.string("responsible");
      table.string("phone");
      table.string("tracking_code");
      table.timestamps();
    });
  }

  down() {
    this.drop("order_addresses");
  }
}

module.exports = OrderAddressSchema;
