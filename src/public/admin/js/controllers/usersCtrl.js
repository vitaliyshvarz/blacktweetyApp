(function () {
	'use strict';

	/**
	 * Main controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('UsersCtrl', UsersCtrl);

	UsersCtrl
		.$inject = [
		'$scope',
		'$routeSegment',
		'initialData',
		'$translate',
		'$cookies',
		'$rootScope',
		'$location'
	];

	function UsersCtrl($scope, $routeSegment, initialData, $translate, $cookies, $rootScope, $location) {

	  $scope.users = initialData.users.users;
	  $('#usersTable').dataTable();
	}

}());
