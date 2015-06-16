// dependencies
var express = require('express');
var router = express.Router();

// db
var Users = require("../../dbmodels/Users").Users;


// req- request, res - responce
// routes
router.get('/api/users', function(req, res){

	// res.render('index', {
	// 	title: 'Black tweety app',
	// 	users: users
	// });
});

router.post('/api/users', function(req, res){
	var newUser = new Users({
			firstName 	: req.body.firstName,
			lastName 	: req.body.lastName,
			age 		: req.body.age,
			email		: req.body.email
		});
	newUser.save(function (err) {
	  if (err) return handleError(err);
	  console.log('user ' + req.body.firstName + 'saved');
	});
	res.redirect('/');
});

module.exports = router;