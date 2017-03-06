'use strict';

const path = require('path');
//const NeDB = require('nedb');
//const service = require('feathers-nedb');
const hooks = require('./hooks');
const service = require( 'feathers-mongoose');
const UserModel = require('../../models/User');

module.exports = function(){
  const app = this;

  // const db = new NeDB({
  //   filename: path.join(app.get('nedb'), 'users.db'),
  //   autoload: true
  // });

  // let options = {
  //   Model: user,
  //   paginate: {
  //     default: 5,
  //     max: 25
  //   }
  // };

  // Initialize our service with any options it requires
  // app.use('/users', service(options));

  app.use('/users', service({Model: UserModel}))

  //let userService = app.service('users');
  // userService.before({
  //   create: [authHooks.hashPassword('password')]
  // });

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(hooks.before);

  // Set up our after hooks
  userService.after(hooks.after);
};
