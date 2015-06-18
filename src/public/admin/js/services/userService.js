(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.userService
	 * @description
	 * # userService
	 * Service in the blacktweetyApp.
	 */
	angular.module('blacktweetyApp')
	.service('userService',
	  function($resource, USER_API) {
	    var endpointUrl = USER_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false }
	      }
	    );
	  });

}());