(function() {
    'use strict';
    /*
    *	Send email user directive
    */
    angular
        .module('blacktweetyApp')
        .directive('sendEmail', sendEmail);

    sendEmail
        .$inject = [
        '$translate',
        '$filter',
        'Email',
        '$rootScope',
        'userFactory',
        '_'
    ];

    function sendEmail($translate, $filter, Email, $rootScope, userFactory, _) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                user: '=user',
                allUsers: '=allUsers',
                message: '=message'
            },
            templateUrl: 'js/directives/sendEmail.html',
            link: function(scope) {

            scope.allUsers = userFactory.filteredUsersData(scope.allUsers);
            scope.mailParams = _.extend({
                from: $rootScope.user.email,
                to: [],
                cc:[],
                bcc:[],
                subject:'',
                text:''
            }, scope.message);

            scope.showSpinner = false;
            scope.checkEmails = function(emailsArray){
                var invaldEmails = [];
                angular.forEach(emailsArray, function(emailName){
                    if(!/[\w]+@[\w]{1,10}\.[a-zA-Z]{2,5}/i.test(emailName.text)){
                        invaldEmails.push(emailName.text);
                    }
                });
                if(invaldEmails.length > 0){ return invaldEmails.join(', '); }
                return true;
            };

            scope.checkEmailData = function(){
                scope.emailError = false;

                if(!scope.mailParams.to.length){
                    scope.mailToError = $filter('translate')('TO_REQUIRED');
                    scope.emailError = true;
                }
                if(scope.mailParams.to.length && scope.checkEmails(scope.mailParams.to).length){
                    scope.mailToError = $filter('translate')('INVALID_TO') +
                                            scope.checkEmails(scope.mailParams.to);
                    scope.emailError = true;
                } else if(scope.mailParams.to.length){
                    scope.mailToError = '';
                }
                if(scope.mailParams.cc.length && scope.checkEmails(scope.mailParams.cc).length) {
                    scope.mailCcError = $filter('translate')('INVALID_CC') +
                                            scope.checkEmails(scope.mailParams.to);
                    scope.emailError = true;
                } else {
                    scope.mailCcError = '';
                }
                if(scope.mailParams.bcc.length && scope.checkEmails(scope.mailParams.bcc).length) {
                    scope.mailBccError = $filter('translate')('INVALID_BCC') +
                                            scope.checkEmails(scope.mailParams.to);
                    scope.emailError = true;
                } else {
                    scope.mailBccError = '';
                }

                if(!scope.mailParams.text || scope.mailParams.text.length === 0){
                    scope.mailTextError = $filter('translate')('NO_EMAIL_MESSAGE');
                    scope.emailError = true;
                } else {
                    scope.mailTextError = '';
                }

                if(!scope.mailParams.subject.length){
                    scope.emailError = true;
                }
                if(!scope.mailParams.from.length){
                    scope.emailError = true;
                }
                if(scope.emailError){ return false; }
                return true;

            };
            scope.sendEmail = function(){
                if(scope.checkEmailData()){
                    scope.showSpinner = true;
                    Email.send(scope.mailParams);
                }
            };

            $rootScope.$on('EMAIL_SEND', function(){
                scope.showSpinner = false;
            });

            }
        };
    }

})();
