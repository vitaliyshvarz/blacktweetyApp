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
        '$rootScope',
        'resetPassService',
        'updatePassService',
        'sendEmailService'
    ];

    function accountActions(
        loginService,
        $q,
        ngDialog,
        $location,
        $cookies,
        $rootScope,
        resetPassService,
        updatePassService,
        sendEmailService) {

        /**
        * Login user
        * @params{object} - user email and password
        * @returns{promise} user data
        */
        function login(data){
            var _deferred = $q.defer();
            loginService.post(data).$promise.then(
                function(result) {
                    if(result.user.length && result.user[0].active){
                        $rootScope.user = result.user[0];
                        $cookies.putObject('user', result.user[0]);
                        $rootScope.showMessage('Login success');
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
        * Reset user password
        * @params{string} - user email
        * @returns{boolean} - success reset or unsuccess reset
        */
        function resetPass(email){
            var _deferred = $q.defer();
            resetPassService.post({email: email}).$promise.
                then(function(result){
                     _deferred.resolve(result);
                }, function(error){
                     _deferred.reject(result);
                });
            return _deferred.promise;
        }

        /**
        * Update user password
        * @params{string} - user email
        * @returns{boolean} - success reset or unsuccess reset
        */
        function updateUserPass(oldPass, newPass){
            var _deferred = $q.defer();
            updatePassService.post({oldPass: oldPass, newPass: newPass}).$promise.
                then(function(result){
                    $rootScope.showMessage('Password updated');
                    _deferred.resolve(result);
                }, function(error){
                     _deferred.reject(result);
                });
            return _deferred.promise;
        }

        return {
            login: login,
            resetPass: resetPass,
            updateUserPass: updateUserPass
        };
    }

}());