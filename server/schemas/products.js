var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
	image: String,
	name:String,
	description:String,
	tags: [String],
	price: Number,
	quantity: Number,
	state: Boolean,
});

module.exports = mongoose.model('Products', ProductsSchema);
