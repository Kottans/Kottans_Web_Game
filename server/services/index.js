"use strict";
const user = require("./user");
const chat = require("./chat");

module.exports = function() {
  const app = this;
  app.configure(user);
  app.configure(chat);
};
