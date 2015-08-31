(function () {
	'use strict';

	/**
	 * One message controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('MessageCtrl', MessageCtrl);

	MessageCtrl
		.$inject = [
		'$scope',
		'message',
		'emailFactory',
		'emailsData',
		'$location',
		'$filter',
		'$rootScope',
		'users',
		'$compile',
		'$translate'
	];

	function MessageCtrl(
		$scope,
		message,
		emailFactory,
		emailsData,
		$location,
		$filter,
		$rootScope,
		users,
		$compile,
		$translate
		) {

		$scope.messages = emailsData.emailsData;
		$scope.allUsers = users.users;
	  $scope.message = message;
	  $scope.reMessage = {};
	  $scope.fwdMessage = {};
	  $scope.replyCompiled = false;
	  $scope.forwardCompiled = false;

  	$scope.reMessage.from = $rootScope.user.email;
  	$scope.reMessage.subject = 'Re: ' + $scope.message.message.subject;
  	$scope.reMessage.text = '<br><br>On ' + $filter('date')($scope.message.date) +
  													', ' + $scope.message.from + ' Wrote: <hr>' +
  													$scope.message.message.text;

		$scope.fwdMessage.from = $rootScope.user.email;
  	$scope.fwdMessage.subject = 'Fwd: ' + $scope.message.message.subject;
  	$scope.fwdMessage.text = '<br><br>On ' + $filter('date')($scope.message.date) +
  													', ' + $scope.message.from + ' Wrote: <hr>' +
  													$scope.message.message.text;

	 	$scope.delete = function(id){
	  	$scope.deleteLoacalMessage(id);
	  	emailFactory.deleteEmail(id);
	  	$location.path('/main/messages');
	  };

	  $scope.deleteLoacalMessage = function(messId){
	  	angular.forEach($scope.messages, function(message, id){
	  		if(message._id === messId){ $scope.messages.splice(id, 1); }
	  	});
	  };

	  $scope.openReply = function(){
	  	$scope.showForward = false;
	  	$scope.showReply = true;
	  	$scope.sendMessModalName = $filter('translate')('REPLY_MSG');

	  };

	  $scope.openForward = function(){
	  	$scope.showForward = true;
	  	$scope.showReply = false;
	  	$scope.sendMessModalName = $filter('translate')('FORWARD_MSG');
	  };
	}

}());
