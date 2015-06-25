// dependencies
var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var multer  = require('multer');
var done = false;


/*Configure the multer.*/

router.use(multer({ dest: 'src/public/',
	changeDest: function(dest, req, res) {
	    return dest + req.body.username + '/uploads/';
	},
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path);
		done=true;
	}
}));


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
			category	: req.body.role,
			password	: req.body.password,
			avatar		: req.body.avatar
		});
	newUser.save(function (err) {
	  if (err) {console.log(err); res.send(err); return;}
	  console.log('user ' + req.body.firstName + 'saved');
	  res.send('user added success');
	});
});

router.post('/api/photo', function(req, res){
	console.log(req.body);
	if(done === true){
		console.log(req.files);
		res.end("File uploaded.");
	}
});

module.exports = router;