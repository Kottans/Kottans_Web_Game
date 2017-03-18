'use strict';

const path = require('path');
const auth = require('feathers-authentication').hooks;

const service = require( 'feathers-mongoose');
const MessageModel = require('../../models/Message');

module.exports = function(){
  const app = this;
//initialize 'chat' service with required options
  app.use('/chat', service({Model: MessageModel}))

  // Get reference to 'chat' service object so that we can bind hooks
  const chatService = app.service('/chat');

  // Set up our 'before' hooks to be applied before every 'create' method call
 chatService.before({
    create: [
    //check if token is available on service method call' params object
        auth.verifyToken(),
    //add user to service method call params object
        auth.populateUser(),
    //check if user added in previous hook is authenticated to write messages
        auth.restrictToAuthenticated()
      ]
  })
};
