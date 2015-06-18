(function () {

  'use strict';

  /**
   * @ngdoc service
   * @name blacktweetyApp.initialDataFactory
   * @description
   * # userFactory
   * Factory in the blacktweetyApp.
   */
   angular.module('blacktweetyApp')
   .factory("initialDataFactory",
      function(userFactory, $q) {

      function getUsers(){
          var users = userFactory.getAllUsers();

          return $q.all([users]).then(function(results){
              return {
                  users: results[0],
              };
          });
      }
      return {
          getUsers: getUsers
      };
  });

}());