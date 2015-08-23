(function () {

	'use strict';
	/**
	* @ngdoc constants
	* @name blacktweetyApp.constants
	* @description
	* constants in the blacktweetyApp.
	*/
	angular.module('blacktweetyApp')
	.constant('USER_API',          '/api/users')
	.constant('USER_PHOTO_UPLOAD', '/api/photo')
	.constant('LOGIN_API',         '/api/login')
	.constant('RESET_PASS_API',    '/api/reset-pass')
	.constant('DELETE_FILE',       '/api/delete_file')
	.constant('USER_UPDATE_API',   '/api/update_user')
	.constant('USER_PASS_UPDATE',  '/api/update-pass')
	.constant('SEND_EMAIL_API',    '/api/send-message')

	.constant('DEFAULT_AVATAR',    'uploads/userDefault.jpg');

}());