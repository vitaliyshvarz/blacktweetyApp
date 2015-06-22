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
    function(userService, $q, ngDialog) {

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

      return {
        getAllUsers : getAllUsers,
        addNewUser  : addNewUser
      };
    });

}());