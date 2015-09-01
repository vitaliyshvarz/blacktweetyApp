(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.userByIdService
	 * @description
	 * # userByIdService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('userByIdService', userByIdService);

    userByIdService
        .$inject = [
        '$resource',
        'USER_BY_ID_API'
    ];

	function userByIdService($resource, USER_BY_ID_API) {
	    var endpointUrl = USER_BY_ID_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false }
	      }
	    );
	  }

}());