const feathers = require('feathers');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const hooks = require('feathers-hooks');
const memory = require('feathers-memory');
const authentication = require('feathers-authentication');
const bodyParser = require('body-parser');
const handler = require('feathers-errors/handler');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');

// Require your models
const mes = require('./mes-model');

// Tell mongoose to use native promises
// See http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// Connect to your MongoDB instance(s)
mongoose.connect('mongodb://mongo:27017');
//mongo from docker-compose.yml


// A Feathers app is the same as an Express app
const app = feathers();

// Parse HTTP JSON bodies
app.use(bodyParser.json());
// Parse URL-encoded params
app.use(bodyParser.urlencoded({ extended: true }));
// Register hooks module
app.configure(hooks());
// Add REST API support
app.configure(rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
// Register our authentication plugin
app.configure(authentication({ idField: 'id' }));
// Register our memory "users" service
app.use('/users', memory());
// Register a nicer error handler than the default Express one
app.use(handler());

// Register a before hook to hash passwords
app.service('users').before({
  create: authentication.hooks.hashPassword()
});
// Connect to the db, create and register a Feathers service.
app.use('mess', service({
  Model: mes,
  paginate: {
    default: 2,
    max: 4
  }
}));

// Create a test user
app.service('users').create({
  email: 'admin@feathersjs.com',
  password: 'admin'
});

// Start the server
app.listen(3000);
console.log('Server listening on port 3000...')
