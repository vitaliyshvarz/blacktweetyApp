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
		'userFactory',
		'emailFactory',
		'$location'
	];

	function MessagesCtrl($scope, emailsData, $rootScope, users, userFactory, emailFactory, $location) {

	  $scope.messages = emailsData.emailsData;
	  $scope.user = $rootScope.user;
	  $scope.allUsers = userFactory.filteredUsersData(users.users);
	  $('#messagesTable').dataTable();

	  $scope.openMessage = function(type, id){
	  	if(type === 'new'){
	  		emailFactory.setEmailToRead(id);
	  	}
	  	$location.path('/main/messages/' + id);
	  };


	   //db.emails.save({ "_id" : "V1jdi243", "from" : "blackTweetyaApp@mail.com", "message" : { "subject" : "Test MAils here", "text" : "<p>Test1213</p>" }, "date" : ISODate("2015-08-24T19:10:03.059Z"), "bcc" : [ { "name" : "Christoph Schmolmueller ", "address" : "chornij1@gmail.com", "_id" : ObjectId("55db6c0bc71b290a603bb352") } ], "cc" : [ { "name" : "Christoph Schmolmueller ", "address" : "chornij1@gmail.com", "_id" : ObjectId("55db6c0bc71b290a603bb353") } ], "to" : [ { "name" : "Christoph Schmolmueller ", "address" : "chornij1@gmail.com", "_id" : ObjectId("55db6c0bc71b290a603bb354") } ], "type" : "inbox", "unread" : "true", "__v" : 0 })

	}

}());
