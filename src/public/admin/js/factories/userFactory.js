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
    function(userService, $q) {

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

      return {
        getAllUsers: getAllUsers
      };
    });

}());