(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.readEmailService
	 * @description
	 * # readEmailService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('readEmailService', readEmailService);

    readEmailService
        .$inject = [
        '$resource',
        'READ_EMAIL_DATA_API'
    ];

	function readEmailService($resource, READ_EMAIL_DATA_API) {
	    var endpointUrl = READ_EMAIL_DATA_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false , params:{ id:'@id', unread: '@unread' }}
	      }
	    );
	  }

}());