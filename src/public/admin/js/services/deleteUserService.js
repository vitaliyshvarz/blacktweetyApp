(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.deleteUserService
	 * @description
	 * # deleteUserService
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('deleteUserService', deleteUserService);

    deleteUserService
        .$inject = [
        '$resource',
        'DELETE_USER_API'
    ];

	function deleteUserService($resource, DELETE_USER_API) {
	    var endpointUrl = DELETE_USER_API;
	    return $resource(endpointUrl, {},
	      { 'delete': { method: 'DELETE', isArray: false } }
	    );
	  }

}());