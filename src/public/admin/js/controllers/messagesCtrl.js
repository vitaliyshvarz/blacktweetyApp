(function () {
	'use strict';

	/**
	 * Messages controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('MessagesCtrl', MessagesCtrl);

	MessagesCtrl
		.$inject = [
		'$scope',
		'emailsData',
		'$rootScope',
		'users',
		'emailFactory',
		'$location'
	];

	function MessagesCtrl($scope, emailsData, $rootScope, users, emailFactory, $location) {

	  $scope.messages = emailsData.emailsData;
	  $scope.user = $rootScope.user;
	  $scope.allUsers = users.users;
	  $('#messagesTable').dataTable();

	  $scope.openMessage = function(type, id){
	  	if(type === 'new'){
	  		emailFactory.setEmailToRead(id);
	  	}
	  	$location.path('/main/messages/' + id);
	  };

	}

}());
