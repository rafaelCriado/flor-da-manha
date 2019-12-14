"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderItensSchema extends Schema {
  up() {
    this.create("order_itens", table => {
      table.increments();
      table
        .integer("order_id")
        .unsigned()
        .references("id")
        .inTable("orders");
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table.decimal("unitary_value", 10, 2);
      table.decimal("discount", 10, 2);
      table.integer("amount");
      table.decimal("total", 10, 2);
      table.timestamps();
    });
  }

  down() {
    this.drop("order_itens");
  }
}

module.exports = OrderItensSchema;
