(function () {

    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.initialDataFactory
    * @description
    * # userFactory
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('initialDataFactory', initialDataFactory);

    initialDataFactory
        .$inject = [
        'userFactory',
        '$q'
    ];

    function initialDataFactory(userFactory, $q) {

        /**
        * Get all users
        * @returns{promice} object with users array
        */
        function getUsers(){
            var users = userFactory.getAllUsers();

            return $q.all([users]).then(function(results){
                return results[0];
            });
        }

        /**
        * Get user login data
        * @returns{promice} object with login data  array
        */
        function getUserLoginData(id){
            var loginData = userFactory.getUserLoginData(id);

            return $q.all([loginData]).then(function(results){
                return results[0];
            });
        }

        /**
        * Get user emails
        * @returns{promice} object with login data  array
        */
        function getUserEmails(usrEmail){
            var emails = userFactory.getUserEmails(usrEmail);

            return $q.all([emails]).then(function(results){
                return results[0];
            });
        }

        return {
            getUsers: getUsers,
            getUserLoginData: getUserLoginData,
            getUserEmails: getUserEmails
        };
    }

}());