(function () {

    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.accountActions
    * @description
    * # accountActions
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('accountActions', accountActions);

    accountActions
        .$inject = [
        'loginService',
        '$q',
        'ngDialog',
        '$location',
        '$cookies',
        '$rootScope'
    ];

    function accountActions(loginService, $q, ngDialog, $location, $cookies, $rootScope) {

        function login(data){
            var _deferred = $q.defer();
            loginService.post(data).$promise.then(
                function(result) {
                    if(result.user.length && result.user[0].active){
                        $rootScope.user = result.user[0];
                        $cookies.putObject('user', result.user[0]);
                        showMessage('Login success');
                        $location.path('/main');
                    }
                    _deferred.resolve(result);
                },
                function(error) {
                    _deferred.reject( error );
                });
            return _deferred.promise;
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
            login: login
        };
    }

}());