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
		'initialData',
		'$translate',
		'$cookies',
		'$rootScope',
		'$location'
	];

	function MainCtrl($scope, $routeSegment, initialData, $translate, $cookies, $rootScope, $location) {

		$scope.lang = $translate.use();
	  $scope.users = initialData.users.users;
	  $scope.userName = $rootScope.user.name.first + ' ' + $rootScope.user.name.last || '';

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
