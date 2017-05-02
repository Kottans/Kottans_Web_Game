"use strict";

const path = require("path");
const auth = require("feathers-authentication");

const service = require("feathers-mongoose");
const MessageModel = require("../../models/Message");

module.exports = function() {
  const app = this;
  //initialize 'chat' service with required options
  app.use("/chat", service({ Model: MessageModel }));

  // Get reference to 'chat' service object so that we can bind hooks
  const chatService = app.service("/chat");

  // Set up our 'before' hooks to be applied before every 'create' method call
  chatService.before({
    create: [auth.hooks.authenticate("jwt")]
  });
  chatService.after({
    all(hook) {

      hook.result.user = hook.params.user
 
    }
  });
};
