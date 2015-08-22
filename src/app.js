

// dependencies ==============================================================
var express 	  = require('express');
var app 		    = express();
var path 		    = require('path'); // core nodejs module
var bodyParser 	= require('body-parser');
var jade 		    = require('jade');
var favicon 	  = require('serve-favicon');
var port 		    = process.env.PORT || 5000;
var database   	= require('./config/db');
var mongoose 	  = require('mongoose');
var environment = app.settings.env;
var fs  		    = require('fs');

// db ========================================================================
var dbConfig = JSON.parse(fs.readFileSync('./dbConf.json', 'utf8'));
var env = environment === 'development' ? 'dev' : 'prod';
mongoose.connect('mongodb://' + dbConfig[env].host  + '/' + dbConfig[env].dbName);

//app confings ===============================================================
app.set('views', path.join(__dirname, './public'));
app.set('view engine', 'jade');

//use middleware =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// make this route public
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/favicon.png')); // favicon

//modules =====================================================================
app.use(require('./router')); //Router
app.use(require('./api/api'));//API

// start the app =============================================================
app.listen(port, function(){
	console.log('app is runnin on port ' + port);
	console.log('environment: ' + environment);
});
