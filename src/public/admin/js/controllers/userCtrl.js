(function () {
	'use strict';

	/**
	 * One user controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').controller('UserCtrl', UserCtrl);

	UserCtrl
		.$inject = [
		'$scope',
		'$location',
		'$filter',
		'$rootScope',
		'user', 'users',
		'userFactory',
		'DEFAULT_AVATAR'
	];

	function UserCtrl(
		$scope,
		$location,
		$filter,
		$rootScope,
		user, users,
		userFactory,
		DEFAULT_AVATAR
		) {

	  $scope.user = user.user;
	  $scope.allUsers = users.users;
	  $scope.userName = $scope.user.name.first + ' ' +  $scope.user.name.last;

    /*
    * remove selected image
    */
    $scope.removeImage = function(){
        $scope.files = [];
    };

    /*
    * delete Image
    */
    $scope.deleteImage = function(){
        userFactory.deleteImage($scope.user.avatar);
        $scope.user.avatar = DEFAULT_AVATAR;
        userFactory.updateUser($scope.user);
    };
    /*
    * upload Image image
    * @params{array} files
    */
    $scope.uploadImage = function (files) {
        $scope.user.avatar = files[0].name;
        userFactory.uploadAvatar(files[0]);
    };

    /*
    * update user
    */
    $scope.updateUser = function(){
        if($scope.files){
            $scope.uploadImage($scope.files);
        }
        $rootScope.user = $scope.user;
        userFactory.updateUser($scope.user).
            then($scope.updateLocalUser);
    };
    /*
    * update local user object
    * @params{object} new receipe object
    */
    $scope.updateLocalUser = function(user){
      //hide buffered image
      if($scope.files){
      	$scope.files[0] = null;
      }
      $scope.user.avatar = user.user.avatar;
    };
	}

}());
