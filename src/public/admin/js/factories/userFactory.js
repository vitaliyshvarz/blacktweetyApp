(function () {
    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.userFactory
    * @description
    * # userFactory
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('userFactory', userFactory);

    userFactory
        .$inject = [
        'userService',
        '$q',
        'ngDialog',
        '$location',
        'Upload',
        'deleteFile',
        'updateUserService',
        'USER_PHOTO_UPLOAD'
    ];

    function userFactory(userService, $q, ngDialog, $location, Upload, deleteFile, updateUserService, USER_PHOTO_UPLOAD) {

        /**
        * Returns all users
        */
        var getAllUsers = function() {
            var _deferred = $q.defer();
            userService.query({}).$promise.then(
                function(result) {
                    _deferred.resolve(result);
                },
                function(error) {
                    _deferred.reject( error );
                });
            return _deferred.promise;
        };

        /**
        * Add new user
        * params{object} - user data
        */
        var addNewUser = function(user) {
            var _deferred = $q.defer();
            userService.post(user).$promise.then(
                function(result) {
                    showMessage("Success adding user");
                    _deferred.resolve(result);
                },
                function(error) {
                    _deferred.reject( error );
                });
            return _deferred.promise;
        };

        var uploadAvatar = function(file){
            Upload.upload({
                url: USER_PHOTO_UPLOAD,
                file: file,
                fields: {
                    'username': 'admin',
                    'extention': file.name.split('.').pop()
                },
            }).progress(function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' +
                          evt.config.file.name + '\n');
            }).success(function (data, status, headers, config) {
                console.log('file: ' + config.file.name + ', Response: ' +
                JSON.stringify(data) + '\n');
            });
        };

        /**
        * Delete image
        * @params{string} -file link
        */
        var deleteImage = function(file){
            var _deferred = $q.defer();
            deleteFile.post({file : file}).$promise.then(
                function(result) {
                    _deferred.resolve(result);
                },
                function(error) {
                    _deferred.reject( error );
                });
            return _deferred.promise;
        };

        /**
        * Update user
        * @params{object} - user data
        */
        var updateUser = function(user){
            var _deferred = $q.defer();
            updateUserService.post(user).$promise.then(
                function(result) {
                    _deferred.resolve(result);
                    showMessage("User Updated");
                },
                function(error) {
                    _deferred.reject( error );
                });
            return _deferred.promise;
        };

        /*
        * Get filtered user data
        * @params{object} users full data
        * @returns{array} users array with names, emails
        */
        function filteredUsersData(userData){
            var users = [];
            angular.forEach(userData, function(user){
                users.push({text: user.name.first + ' ' + user.name.last + ' ' + user.email});
            });
            return users;
        }

        /**
        * Show dialog message
        * @params{string} - message
        */
        function showMessage(message){
            ngDialog.open({ template: 'js/views/popupTmpl.html' ,
                controller: ['$scope', function($scope) {
                $scope.message = message;
                }]
            });
        }

        return {
            getAllUsers : getAllUsers,
            addNewUser  : addNewUser,
            uploadAvatar: uploadAvatar,
            deleteImage: deleteImage,
            updateUser: updateUser,
            filteredUsersData: filteredUsersData
        };
    }

}());