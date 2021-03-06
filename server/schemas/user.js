var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  name : {type: String, required: true},
  username : {type: String, unique: true, required: true},
  password : String,
  email : {type: String, unique: true, required: true},
  scope : [String],//tiene q ver con autorizacion los roles
  state : Boolean
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
