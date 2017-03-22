'use strict';

const path = require('path');
//const NeDB = require('nedb');
//const service = require('feathers-nedb');
const hooks = require('./hooks');
const service = require( 'feathers-mongoose');
const UserModel = require('../../models/User');

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  // app.use('/users', service(options));

  app.use('/users', service({Model: UserModel}))

   // Get our initialize service so that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(hooks.before);

  // Set up our after hooks
  userService.after(hooks.after);
};
