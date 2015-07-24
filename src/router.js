// dependencies
var express = require('express');
var router = express.Router();

// db
var Users = require("../dbmodels/Users").Users;

// req- request, res - responce
// routes
router.get('/', function(req, res){
	res.render('app/views/index', {
		title: 'Black tweety app',
	});
});

router.get('/admin', function(req, res){
	res.render('admin/index', {
		title: 'Black tweety ADMIN'
	});
});

router.get('/login', function(req, res){
	res.render('admin/views/login', {
		title: 'Login Black tweety app',
	});
});

router.post('/login', function(req, res){
	res.render('admin/views/login', {
		title: 'Login Black tweety app',
	});
});

function merge(){
	console.log("do");
}

module.exports = router;