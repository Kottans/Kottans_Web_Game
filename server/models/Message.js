var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const MessageSchema = new Schema({
  text: {type: String, required: true, unique: true},
  // password: {type: String, required: true },
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

var MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
