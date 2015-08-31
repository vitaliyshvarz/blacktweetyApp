(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.deleteEmailService
	 * @description
	 * # deleteEmailService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('deleteEmailService', deleteEmailService);

    deleteEmailService
        .$inject = [
        '$resource',
        'DLETE_EMAIL_API'
    ];

	function deleteEmailService($resource, DLETE_EMAIL_API) {
	    var endpointUrl = DLETE_EMAIL_API;
	    return $resource(endpointUrl, {},
	      {
	        'delete': { method: 'DELETE', isArray: false }
	      }
	    );
	  }

}());