(function () {
	'use strict';

	/**
	 * Main controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('LoginCtrl', LoginCtrl);

	LoginCtrl
		.$inject = [
		'$scope',
		'$routeSegment',
		'$translate',
		'accountActions',
		'$filter'
	];

	function LoginCtrl($scope, $routeSegment, $translate, accountActions, $filter) {

		$scope.lang = $translate.use();
		$scope.email = '';
		$scope.renEmail = '';
		$scope.pass = '';
		$scope.loginError = false;
		$scope.forgotPass = false;
		$scope.successNewPass = false;

		$scope.login = function() {
			if($scope.email.length > 0 && $scope.pass.length > 0) {
				accountActions.login({email: $scope.email, pass: $scope.pass}).
					then(function(result){
						if(!result.user.length){
							$scope.loginError = $filter('translate')('USER_NOT_FOUND');
						}
						if(result.user.length && !result.user.active){
							$scope.loginError = $filter('translate')('USER_NOT_ACTIVE');
						}
					});
			}
		};
		$scope.showForgotPass = function(){
			$scope.forgotPass = !$scope.forgotPass ? true : false;
		};
	  // change language
		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
			$scope.lang = $translate.use();
		};

		$scope.sendNewPass = function(){
			if(/[\w]+@[\w]{1,10}\.[a-zA-Z]{2,5}/i.test($scope.renEmail)){
				accountActions.resetPass($scope.renEmail).
					then(function(result){
						if(result.success){
							$scope.successNewPass = true;
							$scope.newPassResult = $filter('translate')('SUCCESS_NEW_PASS');
						} else {
							$scope.successNewPass = false;
							$scope.newPassResult = $filter('translate')('FAIL_NEW_PASS');
						}
					});
			}
		};
	}

}());
