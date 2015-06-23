// dependencies
var express = require('express');
var router = express.Router();
var shortid = require('shortid');

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
			_id: shortid.generate(),
			name: {
				first : req.body.firstName,
				last 	: req.body.lastName
			},
			age 		: req.body.age,
			email		: req.body.email,
			category	: req.body.category,
			password	: req.body.password
		});
	newUser.save(function (err) {
	  if (err) {console.log(err); res.send(err); return;}
	  console.log('user ' + req.body.firstName + 'saved');
	  res.send('user added success');
	});
});

module.exports = router;