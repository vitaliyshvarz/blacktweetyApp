// dependencies
var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var multer  = require('multer');
var done = false;
var filenameSave = '';


/*Configure the multer.*/

router.use(multer({ dest: 'src/public/',
	changeDest: function(dest, req, res) {
	    return dest + req.body.username + '/uploads/';
	},
	rename: function (fieldname, filename, req, res) {
		var filenameForSave = Date.now()+filename;
		filenameSave = "uploads/"+filenameForSave+'.'+req.body.extention;
		return filenameForSave;
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
			avatar		: filenameSave
		});
	newUser.save(function (err) {
	  if (err) {console.log(err); res.send(err); return;}
	  console.log('user ' + req.body.firstName + 'saved');
	  res.send('user added success');
	});
});

router.post('/api/photo', function(req, res){
	if(done === true){
		res.end("File uploaded.");
	}
});

module.exports = router;