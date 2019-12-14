"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductPhotosSchema extends Schema {
  up() {
    this.create("product_photos", table => {
      table.increments();
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table
        .integer("file_id")
        .unsigned()
        .references("id")
        .inTable("files");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_photos");
  }
}

module.exports = ProductPhotosSchema;
