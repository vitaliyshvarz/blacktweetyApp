var mongoose = require("mongoose");

var EmailSchema = new mongoose.Schema({
	_id: String,
  type: {type: String, default: 'inbox'},
  from: String,
  to: [{name: String, address: String}],
  cc: [{name: String, address: String}],
  bcc: [{name: String, address: String}],
  date: { type: Date, default: Date.now },
  message: {
  	subject: String,
  	text: String
  },
  unread: {type: Boolean, default: true }

});


var Emails = mongoose.model('Emails', EmailSchema);
module.exports = {
  Emails: Emails
}