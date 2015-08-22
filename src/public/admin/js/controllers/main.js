(function () {
	'use strict';

	/**
	 * Main controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('MainCtrl', MainCtrl);

	MainCtrl
		.$inject = [
		'$scope',
		'$routeSegment',
		'$translate',
		'$cookies',
		'$rootScope',
		'$location',
		'DEFAULT_AVATAR'
	];

	function MainCtrl($scope, $routeSegment, $translate, $cookies, $rootScope, $location, DEFAULT_AVATAR) {

		$scope.lang = $translate.use();

	  $scope.init = function(){
			$scope.user = $rootScope.user;
		  $scope.userName = $rootScope.user.name.first + ' ' + $rootScope.user.name.last || '';
		  if(!$scope.user.avatar){
		  	$rootScope.user.avatar = DEFAULT_AVATAR;
		  }
	  };

	  $scope.init();

		// change language
		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
			$scope.lang = $translate.use();
		};

		$scope.logOut = function(){
			$rootScope.user = {};
			$cookies.remove('user');
			$location.path('/login');
		};

		$rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (!$rootScope.user.active) {
            $location.path('/login');
        }
    });



	}

}());
