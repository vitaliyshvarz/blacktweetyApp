(function () {

	'use strict';
	/**
	* @ngdoc constants
	* @name blacktweetyApp.constants
	* @description
	* constants in the blacktweetyApp.
	*/
	angular.module('blacktweetyApp')
	.constant('USER_API',          	 	'/api/users')
	.constant('USER_PHOTO_UPLOAD', 	 	'/api/photo')
	.constant('LOGIN_API',         	 	'/api/login')
	.constant('RESET_PASS_API',    	 	'/api/reset-pass')
	.constant('DELETE_FILE',       	 	'/api/delete_file')
	.constant('USER_UPDATE_API',   	 	'/api/update_user')
	.constant('USER_PASS_UPDATE',  	 	'/api/update-pass')
	.constant('SEND_EMAIL_API',    	 	'/api/send-message')
	.constant('USER_LOGIN_DATA_API', 	'/api/get-login-data/:id')
	.constant('USER_EMAIL_DATA_API', 	'/api/get-email-data')
	.constant('READ_EMAIL_DATA_API', 	'/api/read-email/:id')
	.constant('EMAIL_BY_ID_DATA_API', '/api/email-by-id/:id')

	.constant('DEFAULT_AVATAR',    'uploads/userDefault.jpg');

}());