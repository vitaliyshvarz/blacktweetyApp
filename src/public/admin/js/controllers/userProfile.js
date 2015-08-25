(function () {
	'use strict';

	/**
	 * Main controller of blacktweetyApp
	 */
	angular.module('blacktweetyApp').
		controller('userProfileCtrl', userProfileCtrl);

	userProfileCtrl
		.$inject = [
		'$scope',
		'$routeSegment',
		'$translate',
		'$rootScope',
		'userFactory',
		'$cookies',
		'DEFAULT_AVATAR',
		'accountActions',
		'users',
    'loginData',
    'emailsData'
	];

	function userProfileCtrl(
			$scope,
			$routeSegment,
			$translate,
			$rootScope,
			userFactory,
			$cookies,
			DEFAULT_AVATAR,
			accountActions,
			users,
      loginData,
      emailsData
		) {
		$scope.user = $rootScope.user;
		$scope.userName = $scope.user.name.first + ' ' + $scope.user.name.last || '';
		$scope.password1 = '';
  	$scope.password2 = '';
  	$scope.nameError = false;
  	$scope.passError = false;
  	$scope.passwordOld = '';

  	$scope.allUsers         = userFactory.filteredUsersData(users.users);
    $scope.userLoginData    = loginData.loginData;
    $scope.user.messages    = emailsData.emailsData;
    $scope.user.newMessages = userFactory.getNewMessages($scope.user.messages);

    /*
    *   Check user name.
    *   parmas{string} name type
    */
  	$scope.checkName = function(nameSt){
  		var name = nameSt + 'Name',
  			error = nameSt + 'NameError',
  			errorText = nameSt + 'NameErrorText';
  		if(!$scope.user.name[nameSt]){
  			$scope[errorText] = 'user ' + nameSt + ' name is required';
  			$scope[error] = true;
  		}else
  		if(!isNaN($scope.user.name[nameSt])){
  			$scope[errorText] = 'user ' + nameSt + ' name must be string';
  			$scope[error] = true;
  		} else
  		if($scope.user.name[nameSt].length > 50){
  			$scope[errorText] = 'user ' + nameSt + ' name is too long';
  			$scope[error] = true;
  		} else {
  			$scope[error] = false;
  		}
  	};

  	/*
  	*	Set user password.
  	*/
  	$scope.setPassword = function(){
  		if($scope.password1 !== $scope.password2){
  			$scope.passError = true;
  			$scope.passErrorText = 'passwords do not match';
  		} else {
  			$scope.user.password = $scope.password1;
  			$scope.passError = false;
  		}
  	};


      /*
      * remove selected image
      */
      $scope.removeImage = function(){
          $scope.files = [];
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
      * delete Image
      */
      $scope.deleteImage = function(){
          userFactory.deleteImage($scope.user.avatar);
          $scope.user.avatar = DEFAULT_AVATAR;
          $rootScope.user.avatar = DEFAULT_AVATAR;
          $cookies.putObject('user', $scope.user);
          userFactory.updateUser($scope.user);
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
        $cookies.putObject('user', user.user.avatar);
        $rootScope.user.avatar = user.user.avatar;
        $scope.user.avatar = user.user.avatar;
      };

      /*
      * update user password
      * @params{object} new receipe object
      */
      $scope.updatePassword = function(){
      	if($scope.passwordOld.length > 0 &&
      			$scope.password1.length > 0 &&
      			$scope.password2.length > 0){
      		$scope.user.password = $scope.password1;
      		accountActions.updateUserPass($scope.passwordOld, $scope.password1).
      			then(function(){
      				$scope.password1 = '';
  						$scope.password2 = '';
  						$scope.passwordOld = '';
      			});
      	}
      };
	}

}());
