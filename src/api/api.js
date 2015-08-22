// dependencies
var express      	= require('express');
var router       	= express.Router();
var shortid      	= require('shortid');
var multer       	= require('multer');
var mailer       	= require('./../config/mail.js');
var mailTpl      	= require('./../config/emailTpl.js');
var adminDetails 	= require('./../config/admin.js');
var done         	= false;
var filenameSave 	= '';
var fs 						= require('fs');

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

router.post('/api/login', function(req, res){
		Users.find({password: req.body.pass, email: req.body.email},
			function(err, user) {
				if (err) {console.log(err); res.send(err); return;}
				user.password = '';
				res.send({
					user: user
				});
		});
});

router.post('/api/reset-pass', function(req, res){
	Users.find({email: req.body.email},
		function(err, user){
			if (err) {console.log(err); res.send(err); return;}
			if (user.length){
				var newPass = shortid.generate();
				Users.update({email: req.body.email}, {password: newPass},{},
					function(err, user){

						if (err) {console.log(err); res.send(err); return;}
						var mailOptions = {
						    from: adminDetails.admin.email, // sender address
						    to: req.body.email, // list of receivers
						    subject: adminDetails.app.name + ' Password reneval ✔', // Subject line
						    html: mailTpl.passwordReneval(newPass) // html body
						};

						mailer.sendMail(mailOptions, function(error, info){
						    if(error){
						    		res.send(error);
						        console.log(error);
						    }else{
						    		res.send({success: 'message sent'});
						        console.log('Message sent: ' + info.response);
						    }
						});
				});
			} else {
				res.send({error: 'no user found'});
			}
		});
});

/**
*	Update user
*/
router.post('/api/update_user', function(req, res){
	var newUser = {
			name: {
				first      : req.body.name.first,
				last 	     : req.body.name.last
			},
			age 		     : req.body.age,
			email		     : req.body.email,
			category	   : req.body.category,
			avatar		   : !!filenameSave ? filenameSave : req.body.avatar,
			_id          : req.body._id
	};
	Users.update({_id: req.body._id }, newUser ,{},function(err, result) {
	    if (err) { console.log(err); res.send(err); return;}
	    console.log('user ' + req.body.name.first + req.body.name.last + ' updated');
	    res.send({ user: newUser, resMessage : 'user update success' });
	   	filenameSave = '';
  	});
});

router.post('/api/update-pass', function(req, res){
	Users.find({password: req.body.oldPass}, function(err, user){
		if(err || !user.length){ console.log('user not found', err); res.send(err); return;}
		else{
			Users.update({password: req.body.oldPass}, {password: req.body.newPass},{},
				function(err, result){
					if (err) { console.log('error updating user', err); res.send(err); return;}
			    console.log('user password updated');
			    res.send({ success: 'password updated' });
				});
		}
	});
});

/**
*	delete file
*/
router.post('/api/delete_file', function(req, res){
	fs.unlinkSync('src/public/admin/' + req.body.file, function (err) {
	  if (err) throw err;
	  console.log('successfully deleted ' + req.body.file);
	});
});

module.exports = router;