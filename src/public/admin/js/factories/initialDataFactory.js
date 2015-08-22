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
                return {
                    users: results[0],
                };
            });
        }
        return {
            getUsers: getUsers
        };
    }

}());