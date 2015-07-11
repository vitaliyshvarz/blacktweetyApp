(function () {
	'use strict';
	/**
	 * @ngdoc service
	 * @name blacktweetyApp
	 * @description
	 * # siteServerServices
	 * main app blacktweetyApp
	 */

	var app = angular.module('blacktweetyApp',
		[ 'ngResource',
			'ngRoute',
			'ngAnimate',
			'route-segment',
			'view-segment',
			'ngDialog',
			'pascalprecht.translate',
			'ngFileUpload'
		]);

	app.config(['$routeSegmentProvider',
		'$routeProvider',
		'$translateProvider',
		function($routeSegmentProvider, $routeProvider, $translateProvider) {
	    $routeSegmentProvider.options.autoLoadTemplates = true;
	    $routeSegmentProvider

	        .when('/main',          'main')

	        .segment('main', {
	            templateUrl: 'js/views/main.html',
	            controller: 'MainCtrl',
	            resolve: {
	            	initialData: ['initialDataFactory', function(initialDataFactory) {
			            return initialDataFactory.getUsers();
			        }]
	            },
		        untilResolved: {
		          templateUrl: 'js/views/loading.html'
		        },
		        resolveFailed: {
		          templateUrl: 'js/views/error.html'
		        }
	        });

	    $routeProvider.otherwise({redirectTo: '/main'});
	    $translateProvider.preferredLanguage('en');
	}]);

}());