// dependencies
var express = require('express');
var router = express.Router();

// db
var Users = require("../dbmodels/Users").Users;

var todoItems = [
	{id: 1, desc: 'foo'},
	{id: 2, desc: 'bar'},
	{id: 3, desc: 'here'},
	{id: 3, desc: 'here'},
	{id: 3, desc: 'here'},
	{id: 3, desc: 'here'},
	{id: 3, desc: 'here'},
];



// req- request, res - responce
// routes
router.get('/', function(req, res){
		Users.find({}, function(err, users) {
			var userMap = {};

			users.forEach(function(user) {
			  userMap[user._id] = user;
			});
			console.log(userMap);
			res.render('index', {
				title: 'Black tweety app',
				users: userMap
			});
		});

});

router.post('/add', function(req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	res.redirect('/');
});

module.exports = router;