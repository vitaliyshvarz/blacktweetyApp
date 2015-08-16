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
		$scope.pass = '';
		$scope.loginError = false;

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
	  // change language
		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
			$scope.lang = $translate.use();
		};
	}

}());
