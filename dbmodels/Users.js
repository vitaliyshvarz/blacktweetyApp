var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	_id: String,
	name: {
		first: String,
		last: String,
		type: Object
    },
  age: Number,
  email: String,
  date: { type: Date, default: Date.now },
  avatar: String,
  category: { type: String, default: 'default' },
  active:  { type: Boolean, default: false },
  password: String,
  lastLogin: Date
});

var Users = mongoose.model('Users', UserSchema);
module.exports = {
  Users: Users
}