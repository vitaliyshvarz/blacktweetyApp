// dependencies
var express = require('express');
var router = express.Router();

// db
var Users = require("../../dbmodels/Users").Users;

// routes
router.get('/api/users', function(req, res){
	Users.find({}, function(err, users) {
		var userMap = {};

		users.forEach(function(user) {
		  userMap[user._id] = user;
		});
		res.send({
			users: userMap
		});
	});
});

router.post('/api/users', function(req, res){
	var newUser = new Users({
			name: {
				first : req.body.firstName,
				last 	: req.body.lastName
			},
			age 		: req.body.age,
			email		: req.body.email,
			password	: req.body.password
		});
	newUser.save(function (err) {
	  if (err) {console.log(err); res.send(err); return;}
	  console.log('user ' + req.body.firstName + 'saved');
	});
});

module.exports = router;