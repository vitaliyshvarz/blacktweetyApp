(function () {
	'use strict';

	/**
	 * Dashboard controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('DashboardCtrl', DashboardCtrl);

	DashboardCtrl
		.$inject = [
		'$scope',
		'userFactory',
		'emailsData'
	];

	function DashboardCtrl($scope, userFactory, emailsData) {

		 $scope.newMessages = userFactory.getNewMessages(emailsData.emailsData);

	}

}());
