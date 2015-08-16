(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.loginService
	 * @description
	 * # loginService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('loginService', loginService);

    loginService
        .$inject = [
        '$resource',
        'LOGIN_API'
    ];

	function loginService($resource, LOGIN_API) {
	    var endpointUrl = LOGIN_API;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());