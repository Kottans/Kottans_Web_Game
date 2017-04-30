'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const authentication = require('./services/authentication');


mongoose.Promise = global.Promise;
// Connect to your MongoDB instance(s)
if (process.env.NODE_HOST === 'docker') {
  mongoose.connect('mongodb://mongo:27017/');
} else {
  mongoose.connect('mongodb://localhost:27017/');
}

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())

.configure(authentication)
  .configure(services)
  .configure(middleware);


module.exports = app;
