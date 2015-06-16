var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	name: {
		first: String,
		last: String,
		type: String,
    	index: true
    },
    age: Number,
    email: String,
    date: { type: Date, default: Date.now },
    avatar: String,
    category: String,
    active: Boolean
});

UserSchema.methods.speak = function() {
	console.log('My name is %s', this.name.full)
};

UserSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last
});

UserSchema.virtual('name.full').set(function(fullName) {
	if(fullName.indexOf(' ') !== -1){
		var segments = fullName.split(' '),
			first = segments[0],
			last = segments[1];
		this.name.first = first;
		this.name.last = last;
	} else {
		this.name.first = fullName;
		this.name.last = '';
	}
});

var Users = mongoose.model('Users', UserSchema);
module.exports = {
  Users: Users
}