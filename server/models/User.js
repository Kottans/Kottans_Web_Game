var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true },
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
