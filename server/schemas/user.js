var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name:String,
    username: String,
    password: String,
    email: String,
    type: String,
    state:Boolean,
});

module.exports = mongoose.model('User', UserSchema);
