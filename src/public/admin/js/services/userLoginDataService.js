(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.userLoginService
	 * @description
	 * # userLoginService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('userLoginService', userLoginService);

    userLoginService
        .$inject = [
        '$resource',
        'USER_LOGIN_DATA_API'
    ];

	function userLoginService($resource, USER_LOGIN_DATA_API) {
	    var endpointUrl = USER_LOGIN_DATA_API;
	    return $resource(endpointUrl, {},
	      {
	        'query': { method: 'GET', isArray: false , params:{ id:'@id' }}
	      }
	    );
	  }

}());