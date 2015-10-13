var mongoose = require("mongoose");

var BlogImagesSchema = new mongoose.Schema({
	_id: String,
  date: { type: Date, default: Date.now },
  userId: {type: String },
  imageUrl: { type: String },
  name: { type: String },
  value: {type: String },
});


var BlogImages = mongoose.model('BlogImages', BlogImagesSchema);
module.exports = {
  BlogImages: BlogImages
}