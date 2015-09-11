(function () {
	'use strict';

	/**
	 * Blog controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('BlogCtrl', BlogCtrl);

	BlogCtrl
		.$inject = [
		'$scope',
		'userFactory',
		'blogData'
	];

	function BlogCtrl($scope, userFactory, blogData) {

		 $scope.blogPosts = blogData;

	}

}());
