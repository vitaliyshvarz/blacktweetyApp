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
                    showMessage('Password updated');
                    _deferred.resolve(result);
                }, function(error){
                     _deferred.reject(result);
                });
            return _deferred.promise;
        }

        /**
        * Send email
        * @params{object} email data
        */
        function sendEmail(email){
            var email = parseEmails(email);
            var _deferred = $q.defer();
            sendEmailService.post(email).$promise.
                then(function(result){
                    showMessage('Email sent!');
                    _deferred.resolve(result);
                }, function(error){
                     _deferred.reject(result);
                });
            return _deferred.promise;
        }

        /**
        * Parse email-name string to for object
        * @params{object} email data
        * @return{object} updated email with receivers updated:
        * {name: 'name', address: 'address'}
        */
        function parseEmails(email){
            var name, address;
            if(email.to.length){
                email.to = formEmailObj(email.to);
            }
            if(email.cc.length){
                email.to = formEmailObj(email.cc);
            }
            if(email.bcc.length){
                email.to = formEmailObj(email.bcc);
            }

            function formEmailObj(emails){
                var formedEmails = [];
                angular.forEach(emails, function(to){
                    address = /[\w]+@[\w]{1,10}\.[a-zA-Z]{2,5}/i.exec(to.text);
                    name = to.text.replace(address, '');
                    formedEmails.push({  name: name, address:  address[0] });
                });
                return formedEmails;
            }

            return email;
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
            login: login,
            resetPass: resetPass,
            updateUserPass: updateUserPass,
            sendEmail: sendEmail
        };
    }

}());