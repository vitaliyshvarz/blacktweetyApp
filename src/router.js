// dependencies
var express = require('express');
var router = express.Router();

// routes
router.get('/', function(req, res){
	res.render('app/views/index', {
		title: 'Black tweety app',
	});
});

module.exports = router;