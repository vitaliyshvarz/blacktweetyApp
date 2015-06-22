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
        '$translate'
    ];

    function addNewUser(userFactory, $translate) {
        return {
            restrict: 'E',
            scope: {},
            replace: false,
            templateUrl: 'js/directives/addNewUser.html',
            link: function(scope) {
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
            	*	Set user password.
            	*/
            	scope.addNewUser = function(){
            		userFactory.addNewUser(scope.user);
            	};
            }
        };
    }

})();
