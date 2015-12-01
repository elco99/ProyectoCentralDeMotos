var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ProductsSchema = new mongoose.Schema({
	image: {type: String , required:true},
	code: {type: String , unique:true, required:true},
	name:{type: String, required:true},
	description:{type: String , required:true},
	tags: [String],
	price: {type: Number , required:true},
	currentAmount: Number
	quantity: {type: Number ,  required:true},
	state: Boolean,
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Products', ProductsSchema);
