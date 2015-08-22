(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.resetPassService
	 * @description
	 * # resetPassService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('resetPassService', resetPassService);

    resetPassService
        .$inject = [
        '$resource',
        'RESET_PASS_API'
    ];

	function resetPassService($resource, RESET_PASS_API) {
	    var endpointUrl = RESET_PASS_API;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());