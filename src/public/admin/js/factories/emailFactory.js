(function () {
    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.emailFactory
    * @description
    * # emailFactory
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('emailFactory', emailFactory);

    emailFactory
        .$inject = [
        'userService',
        '$q',
        'userEmailService',
        'readEmailService',
        'getEmailByIdService'
    ];

    function emailFactory(
        userService,
        $q,
        userEmailService,
        readEmailService,
        getEmailByIdService
        ) {

        var emailCache;

        /**
        * Returns user emails
        * @params{string} user email
        * @returns{object} user login data
        */
        function getUserEmails(email){
            var q = $q.defer();
            userEmailService.query({}).$promise.then(
                function(result) {
                    emailCache = result;
                    q.resolve(result);
                },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Returns new user(emails user has not read)
        * @params{string} user email
        * @returns{object} user login data
        */
        function getNewMessages(allEmails){
            return allEmails.filter(function(email){ return (!!email.unread && email.type === 'inbox'); });
        }

        /**
        * Set email ro unread = fal8se
        * @params{string} email is
        */
        function setEmailToRead(id){
            var q = $q.defer();
            readEmailService.query({'id': id, 'unread': false}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        /**
        * Get email by id
        * @params{string} emailId
        * @return{object} email
        */
        function getEmailById(id){
            var q = $q.defer();
            if(emailCache && emailCache.emailsData.length){
                angular.forEach(emailCache.emailsData, function(email){
                    if(email._id === id){ q.resolve(email); }
                });
            }else{
                getEmailByIdService.query({'id': id }).$promise.then(
                    function(result) { q.resolve(result.email[0]); },
                    function(error) { q.reject( error ); });
            }
            return q.promise;
        }
        return {
            getUserEmails: getUserEmails,
            getNewMessages: getNewMessages,
            setEmailToRead: setEmailToRead,
            getEmailById: getEmailById
        };
    }

}());

