(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.deleteFile
	 * @description
	 * # deleteFile
	 * Service in the blacktweetyApp.
	 */

	angular.module('blacktweetyApp').factory('deleteFile', deleteFile);

    deleteFile
        .$inject = [
        '$resource',
        'DELETE_FILE'
    ];

	function deleteFile($resource, DELETE_FILE) {
	    var endpointUrl = DELETE_FILE;
	    return $resource(endpointUrl, {},
	      {
	        'post': { method: 'POST', isArray: false }
	      }
	    );
	  }

}());