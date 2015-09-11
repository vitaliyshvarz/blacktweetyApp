var mongoose = require("mongoose");

var BlogSchema = new mongoose.Schema({
	_id: String,
  date: { type: Date, default: Date.now },
  userId: {type: String },
  category: {type: String },
  title: { type: String },
  content: { type: String},
  status: {type: Number, default: 1},
  tags: {type: String }
});


var Blog = mongoose.model('Blog', BlogSchema);
module.exports = {
  Blog: Blog
}