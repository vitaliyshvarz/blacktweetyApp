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
        'addUserService',
        '$q',
        '$location',
        'Upload',
        'deleteFile',
        'updateUserService',
        'USER_PHOTO_UPLOAD',
        '$rootScope',
        'userLoginService',
        'userEmailService',
        'userByIdService',
        'deleteUserService'
    ];

    function userFactory(
        userService,
        addUserService,
        $q,
        $location,
        Upload,
        deleteFile,
        updateUserService,
        USER_PHOTO_UPLOAD,
        $rootScope,
        userLoginService,
        userEmailService,
        userByIdService,
        deleteUserService
        ) {

        return {
            getAllUsers : getAllUsers,
            addNewUser  : addNewUser,
            uploadAvatar: uploadAvatar,
            deleteImage: deleteImage,
            updateUser: updateUser,
            filteredUsersData: filteredUsersData,
            getUserLoginData: getUserLoginData,
            getUserEmails: getUserEmails,
            getNewMessages: getNewMessages,
            getUserById: getUserById,
            deleteUser: deleteUser
        };

        /**
        * Returns all users
        */
        function getAllUsers() {
            var q = $q.defer();
            userService.query({}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Add new user
        * params{object} - user data
        */
        function addNewUser(user) {
            var q = $q.defer();
            addUserService.post(user).$promise.then(
                function(result) {
                    $rootScope.showMessage("Success adding user");
                    q.resolve(result);
                },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        function uploadAvatar(file){
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
        }

        /**
        * Delete image
        * @params{string} -file link
        */
        function deleteImage(file){
            var q = $q.defer();
            deleteFile.post({file : file}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Update user
        * @params{object} - user data
        */
        function updateUser(user){
            var q = $q.defer();
            updateUserService.post(user).$promise.then(
                function(result) {
                    q.resolve(result);
                    $rootScope.showMessage("User Updated");
                },
                function(error) { q.reject( error ); });
            return q.promise;
        }

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
        * Returns user loginData
        * @params{string} user id
        * @returns{object} user login data
        */
        function getUserLoginData(id){
            var q = $q.defer();
            userLoginService.query({'id': id}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Returns user by id
        * @params{string} user id
        * @returns{object} user data
        */
        function getUserById(id){
            var q = $q.defer();
            userByIdService.query({'id': id}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Returns user emails
        * @params{string} user email
        * @returns{object} user login data
        */
        function getUserEmails(email){
            var q = $q.defer();
            userEmailService.query({'email': email}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Returns new user(emails user has not read)
        * @params{string} user email
        * @returns{object} user login data
        */
        function getNewMessages(allEmails){
            return allEmails.filter(function(email){ return (!!email.unread && email.type === 'inbox'); });
        }

        /**
        * Delte user by user id
        * @params{string} userId
        */
        function deleteUser(id){
            var q = $q.defer();
            deleteUserService.delete({'id': id}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }
    }

}());

