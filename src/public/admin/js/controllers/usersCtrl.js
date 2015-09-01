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
		'$location'
	];

	function UsersCtrl($scope, $routeSegment, initialData, $location) {

	  $scope.users = initialData.users;
	  angular.element('#usersTable').dataTable();

	 	$scope.openUser = function(id){
	  	$location.path('/main/users/' + id);
	  };
	}

}());
