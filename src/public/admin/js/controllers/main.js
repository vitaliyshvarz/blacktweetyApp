(function () {
	'use strict';

	/**
	 * Main controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp')
	.controller('MainCtrl',
		function($scope, $routeSegment, initialData) {
	    $scope.test = "main page";
	    $scope.users = initialData.users.users;
	});

}());
