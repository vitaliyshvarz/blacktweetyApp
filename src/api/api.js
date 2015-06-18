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
			firstName 	: req.body.firstName,
			lastName 	: req.body.lastName,
			age 		: req.body.age,
			email		: req.body.email,
			password	: req.body.password
		});
	newUser.save(function (err) {
	  if (err) return handleError(err);
	  console.log('user ' + req.body.firstName + 'saved');
	});
	res.redirect('/');
});

module.exports = router;