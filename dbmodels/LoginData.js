var mongoose = require("mongoose");

var LoginSchema = new mongoose.Schema({
	_id: String,
	userId: String,
	date: { type: Date, default: Date.now },
});

var LoginData = mongoose.model('LoginData', LoginSchema);
module.exports = {
  LoginData: LoginData
}