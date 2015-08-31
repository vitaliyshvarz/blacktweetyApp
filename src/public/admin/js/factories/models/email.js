(function () {
    'use strict';

    /**
    * @ngdoc model
    * @name blacktweetyApp.Email
    * @description
    * # Email model
    * Model in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('Email', Email);

    Email
        .$inject = [
        'sendEmailService',
        '$q',
        '$rootScope'
    ];

    function Email(
        sendEmailService,
        $q,
        $rootScope
        ) {

        /**
        * Factory method
        * @constructor
        * @param  {string} params.from           From email.
        * @param  {array}  params.to             To recepients - {text: 'Name Name email@email.com'}.
        * @param  {array}  params.cc             Cc recepients - {text: 'Name Name email@email.com'}.
        * @param  {array}  params.bcc            Bcc recepients - {text: 'Name Name email@email.com'}.
        * @param  {string} params.Subject        Email subject.
        * @param  {string} params.text           Email text.
        * @return {Email}                        Email instance.
        */
        function construct(params){
            params = params || {};
            var instance = Object.create(params, {
                from:    {value: params.from},
                to:      {value: getToRecepiens(params)},
                cc:      {value: getCcRecepiens(params)},
                bcc:     {value: getBccRecepiens(params)},
                subject: {value: params.subject},
                text:    {value: params.text},
                send:    {value: send}
            });
            return instance;
        }

        function getToRecepiens(params){
            return params.to.map(parseEmails);
        }
        function getCcRecepiens(params){
            return params.cc.map(parseEmails);
        }
        function getBccRecepiens(params){
            return params.bcc.map(parseEmails);
        }

        /**
        * Send email
        * @params{object} email data
        */
        function send(emailData){
            var email = construct(emailData);
            var _deferred = $q.defer();
            sendEmailService.post(email).$promise.
                then(function(result){
                    $rootScope.$broadcast('EMAIL_SEND');
                    $rootScope.showMessage('Email sent!');
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
            if(email.text){
                var address = /[\w]+@[\w]{1,10}\.[a-zA-Z]{2,5}/i.exec(email.text);
                var name = email.text.replace(address, '');
                return {  name: name, address:  address[0] };
            }
        }

        return {
            send : send
        };
    }

}());