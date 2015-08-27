(function () {
	'use strict';

	/**
	 * One message controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('MessageCtrl', MessageCtrl);

	MessageCtrl
		.$inject = [
		'$scope',
		'message'
	];

	function MessageCtrl($scope, message) {

	  $scope.message = message;
	  debugger;
	}

}());
