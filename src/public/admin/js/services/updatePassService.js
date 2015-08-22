(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.updatePassService
	 * @description
	 * # updatePassService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('updatePassService', updatePassService);

    updatePassService
        .$inject = [
        '$resource',
        'USER_PASS_UPDATE'
    ];

	function updatePassService($resource, USER_PASS_UPDATE) {
	    var endpointUrl = USER_PASS_UPDATE;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());