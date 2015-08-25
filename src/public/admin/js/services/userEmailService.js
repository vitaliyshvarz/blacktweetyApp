(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.userEmailService
	 * @description
	 * # userEmailService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('userEmailService', userEmailService);

    userEmailService
        .$inject = [
        '$resource',
        'USER_EMAIL_DATA_API'
    ];

	function userEmailService($resource, USER_EMAIL_DATA_API) {
	    var endpointUrl = USER_EMAIL_DATA_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false , params:{ id:'@id' }}
	      }
	    );
	  }

}());