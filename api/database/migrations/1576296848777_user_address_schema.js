"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserAddressSchema extends Schema {
  up() {
    this.create("user_addresses", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.enu("type", ["residential", "commercial", "other"]);
      table.string("street");
      table.string("neighborhood");
      table.string("city");
      table.string("state");
      table.string("zip_code");
      table.string("complement");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_addresses");
  }
}

module.exports = UserAddressSchema;
