(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.updateUserService
	 * @description
	 * # updateUserService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('updateUserService', updateUserService);

    updateUserService
        .$inject = [
        '$resource',
        'USER_UPDATE_API'
    ];

	function updateUserService($resource, USER_UPDATE_API) {
	    var endpointUrl = USER_UPDATE_API;
	    return $resource(endpointUrl, {},
	      {
	        'post': 	{ method: 'POST', isArray: false }
	      }
	    );
	  }

}());