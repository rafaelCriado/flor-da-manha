"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table.string("title");
      table.string("description");
      table.string("information");
      table.string("weight");
      table.string("height");
      table.string("width");
      table.string("capacity");
      table.string("material");
      table.string("color");
      table.string("brand");

      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
