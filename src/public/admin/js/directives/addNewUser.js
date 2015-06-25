(function() {
    'use strict';
    /*
    *	Add new user directive
    *
    */
    angular
        .module('blacktweetyApp')
        .directive('addNewUser', addNewUser);

    addNewUser
        .$inject = [
        'userFactory',
        '$translate',
        '$routeSegment',
        '$timeout'
    ];

    function addNewUser(userFactory, $translate, $routeSegment, $timeout) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'js/directives/addNewUser.html',
            link: function(scope, $timeout) {
            	scope.user = {
            		'firstName': '',
            		'lastName': '',
            		'email': '',
            		'age': '',
            		'role': 'default',
            		'password':'',
            		'avatar':''

            	};
            	scope.password1 = '';
            	scope.password2 = '';
            	scope.nameError = false;
            	scope.passError = false;

                /*
                *   Reset user object.
                */
                scope.resetUser = function(){
                    scope.user = {
                        'firstName': '',
                        'lastName': '',
                        'email': '',
                        'age': '',
                        'role': 'default',
                        'password':'',
                        'avatar':''
                    };
                    scope.password1 = '';
                    scope.password2 = '';
                    $routeSegment.chain[0].reload();
                };

                /*
                *   Check user name.
                *   parmas{string} name type
                */
            	scope.checkName = function(nameSt){
            		var name = nameSt + 'Name',
            			error = nameSt + 'NameError',
            			errorText = nameSt + 'NameErrorText';
            		if(!scope.user[name]){
            			scope[errorText] = 'user ' + nameSt + ' name is required';
            			scope[error] = true;
            		}else
            		if(!isNaN(scope.user[name])){
            			scope[errorText] = 'user ' + nameSt + ' name must be string';
            			scope[error] = true;
            		} else
            		if(scope.user[name].length > 50){
            			scope[errorText] = 'user ' + nameSt + ' name is too long';
            			scope[error] = true;
            		} else {
            			scope[error] = false;
            		}
            	};
            	/*
            	*	Set user password.
            	*/
            	scope.setPassword = function(){
            		if(scope.password1 !== scope.password2){
            			scope.passError = true;
            			scope.passErrorText = 'passwords do not match';
            		} else {
            			scope.user.password = scope.password1;
            			scope.passError = false;
            		}
            	};

            	/*
            	*	Add new user.
            	*/
            	scope.addNewUser = function(){
                    if(scope.user.firstName && scope.user.lastName &&
                        scope.user.email && scope.user.age &&
                        scope.user.role && scope.user.password) {
                            scope.uploadAvatar(scope.files);
                            userFactory.addNewUser(scope.user);
                            scope.resetUser();
                    }
            	};

                /*
                *   remove selected image
                */
                scope.removeImage = function(){
                    scope.files = [];
                };

                scope.log = '';

                scope.uploadAvatar = function (files) {
                    scope.user.avatar = files[0].name;
                    userFactory.uploadAvatar(files[0]);
                };


            }
        };
    }

})();
