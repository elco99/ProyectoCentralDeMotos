var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ProductsSchema = new mongoose.Schema({
  image: {type:String,  required:true},
  code: {type:String, unique:true, required:true},
  name:{type:String, required:true},
  description:{type:String, required:true},
  tags: [String],
  price: {type:String, required:true},
  quantity:{type:String, required:true},
	subtotal:Number,
	currentAmount: Number,
  state: Boolean,
});

ProductsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Products', ProductsSchema);
