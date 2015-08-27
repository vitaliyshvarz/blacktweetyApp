(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.getEmailByIdService
	 * @description
	 * # getEmailByIdService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('getEmailByIdService', getEmailByIdService);

    getEmailByIdService
        .$inject = [
        '$resource',
        'EMAIL_BY_ID_DATA_API'
    ];

	function getEmailByIdService($resource, EMAIL_BY_ID_DATA_API) {
	    var endpointUrl = EMAIL_BY_ID_DATA_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false }
	      }
	    );
	  }

}());