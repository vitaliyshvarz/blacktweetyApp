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
		'userFactory',
		'$translate'
	];

	function MainCtrl($scope, $routeSegment, initialData, userFactory, $translate) {

		$scope.lang = $translate.use();
	    $scope.users = initialData.users.users;


	    $scope.addUser = function(data){
	    	userFactory.addNewUser(data);
	    };

	    // change language
		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
			$scope.lang = $translate.use();
		};
	}

}());
