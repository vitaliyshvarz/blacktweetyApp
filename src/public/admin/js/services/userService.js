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
        'USER_API'
    ];

	function userService($resource, USER_API) {
	    var endpointUrl = USER_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false },
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());