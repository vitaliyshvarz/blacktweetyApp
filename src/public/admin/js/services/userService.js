(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.userService
	 * @description
	 * # userService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('userService', userService);

    userService
        .$inject = [
        '$resource',
        'USERS_API'
    ];

	function userService($resource, USERS_API) {
	    var endpointUrl = USERS_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false },
	      }
	    );
	  }

}());