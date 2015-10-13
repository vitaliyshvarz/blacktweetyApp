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
	.constant('tinymceOptions', {
      theme: "modern",
      plugins: [
          "advlist autolink lists link image charmap print preview hr anchor pagebreak",
          "searchreplace wordcount visualblocks visualchars code fullscreen",
          "insertdatetime media nonbreaking save table contextmenu directionality",
          "emoticons template paste textcolor tinyvision"
      ],
      toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
      toolbar2: "print preview media | forecolor backcolor emoticons",
      image_advtab: true,
      height: "300px",
      tinyvision: {
          source: '/api/blog-images',
          upload: function () {
              
          }
      }
    });

}());