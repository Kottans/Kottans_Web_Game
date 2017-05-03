"use strict";

const authentication = require("feathers-authentication");
const jwt = require("feathers-authentication-jwt");
const local = require("feathers-authentication-local");

module.exports = function() {
  const app = this;

  let config = app.get("auth");

  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  app.service("authentication").hooks({
    before: {
      create: [authentication.hooks.authenticate(config.strategies)],
      remove: [authentication.hooks.authenticate("jwt")]
    }
  });
};
