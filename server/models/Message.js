var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, unique: false },
  // password: {type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: { type: String, default: 'Title'}
});

var MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
