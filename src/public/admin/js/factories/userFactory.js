(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name blacktweetyApp.userFactory
   * @description
   * # userFactory
   * Factory in the blacktweetyApp.
   */
  angular.module('blacktweetyApp')
  .factory('userFactory',
    function(userService, $q, ngDialog, $location, Upload, USER_PHOTO_UPLOAD) {

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
          }
        );
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
            ngDialog.open({ template: 'js/views/popupTmpl.html' });
            _deferred.resolve(result);
          },
          function(error) {
            _deferred.reject( error );
          }
        );
        return _deferred.promise;
      };

      var uploadAvatar = function(file){
          Upload.upload({
              url: USER_PHOTO_UPLOAD,
              file: file,
              fields: {
                'username': 'admin',
                'extention': file.type.substr(file.type.indexOf('/')+1)
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
      return {
        getAllUsers : getAllUsers,
        addNewUser  : addNewUser,
        uploadAvatar: uploadAvatar
      };
    });

}());