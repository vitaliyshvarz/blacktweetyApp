(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.sendEmailService
	 * @description
	 * # sendEmailService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('sendEmailService', sendEmailService);

    sendEmailService
        .$inject = [
        '$resource',
        'SEND_EMAIL_API'
    ];

	function sendEmailService($resource, SEND_EMAIL_API) {
	    var endpointUrl = SEND_EMAIL_API;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());