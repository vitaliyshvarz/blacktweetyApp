(function () {

	'use strict';
	/**
	* @ngdoc constants
	* @name blacktweetyApp.constants
	* @description
	* constants in the blacktweetyApp.
	*/
	angular.module('blacktweetyApp')
	.constant('USERS_API',          	'/api/users')
	.constant('ADD_USER_API',         '/api/add-user')
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
	.constant('DLETE_EMAIL_API',      '/api/delete-email/:id')
	.constant('USER_BY_ID_API',       '/api/user-by-id/:id')
	.constant('DELETE_USER_API',      '/api/delete-user/:id')

	.constant('DEFAULT_AVATAR',    'uploads/userDefault.jpg')
	.constant('SEARCH_CONFIGS',   {
		users: {name: 'users', endPoint: '/api/search-in-users'},
		blog: {name: 'blog posts', endPoint: '/api/search-in-blog'},
		messages: {name: 'messages',  endPoint: '/api/search-in-messages'}
	})
	.constant('BLOG_IMAGES', '/api/blog-images')
	.constant('BLOG_IMAGE_UPLOAD', '/api/blog-image')

	.config(function ($provide) {

        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', 'ngDialog', function (taRegisterTool, taOptions, ngDialog) {
            taRegisterTool('uploadImage', {
                buttontext: 'Upload Image',
                iconclass: "fa fa-image",
                action: function (deferred,restoreSelection) {
                    ngDialog.open({
                        controller: 'UploadImageModalInstance',
                        template: 'js/views/upload.html'
                    }).closePromise.then(
                        function (result) {
                        	debugger;
                            restoreSelection();
                            document.execCommand('insertImage', true, result.value);
                            deferred.resolve();
                        },
                        function () {
                            deferred.resolve();
                        }
                    );
                    return false;
                }
            });
            taOptions.toolbar[1].push('uploadImage');
            return taOptions;
        }]);
    })

}());