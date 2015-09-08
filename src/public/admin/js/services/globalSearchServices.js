(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name blacktweetyApp.glUsersSearchService
	 * @description
	 * # glUsersSearchService
	 * Global search services
	 */
	angular.module('blacktweetyApp').service('glUsersSearchService', glUsersSearchService);
	angular.module('blacktweetyApp').service('glMessagesSearchService', glMessagesSearchService);
	angular.module('blacktweetyApp').service('glBlogSearchService', glBlogSearchService);

  glUsersSearchService.$inject = ['$resource',	'SEARCH_CONFIGS'];
  glMessagesSearchService.$inject = ['$resource', 'SEARCH_CONFIGS'];
  glBlogSearchService.$inject = ['$resource','SEARCH_CONFIGS'];

	function glUsersSearchService($resource, SEARCH_CONFIGS) {
    var endpointUrl = SEARCH_CONFIGS.users.endPoint;
    return $resource(endpointUrl, {},
      { 'post': { method: 'POST', isArray: true } });
	}

	function glMessagesSearchService($resource, SEARCH_CONFIGS) {
    var endpointUrl = SEARCH_CONFIGS.messages.endPoint;
    return $resource(endpointUrl, {},
      { 'post': { method: 'POST', isArray: true } });
	}

	function glBlogSearchService($resource, SEARCH_CONFIGS) {
    var endpointUrl = SEARCH_CONFIGS.blog.endPoint;
    return $resource(endpointUrl, {},
      { 'post': { method: 'POST', isArray: true } });
	}

}());