"use strict";

class User {
  get rules() {
    return {
      email: "email|required",
      password: "required",
      name: "required",
      phone: "required"
    };
  }
}

module.exports = User;
