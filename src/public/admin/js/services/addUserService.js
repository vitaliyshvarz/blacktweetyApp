(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.addUserService
	 * @description
	 * # addUserService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('addUserService', addUserService);

    addUserService
        .$inject = [
        '$resource',
        'ADD_USER_API'
    ];

	function addUserService($resource, ADD_USER_API) {
	    var endpointUrl = ADD_USER_API;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());