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
			'ngFileUpload',
			'ngCookies',
			'datatables',
			'ngTagsInput',
			'textAngular'
		]);

	app.config(['$routeSegmentProvider',
		'$routeProvider',
		'$translateProvider',
		function($routeSegmentProvider, $routeProvider, $translateProvider) {
	    $routeSegmentProvider.options.autoLoadTemplates = true;
	    $routeSegmentProvider

	        .when('/main',          			'main')
	        .when('/login',         			'login')
	        .when('/main/user-profile',   'main.userProfile')
	        .when('/main/dash-board',     'main.dashBoard')
	        .when('/main/users',          'main.users')

	        .segment('main', {
            templateUrl: 'js/views/main.html',
            controller: 'MainCtrl',
            resolve:{},
		        untilResolved: {
		          templateUrl: 'js/views/loading.html'
		        },
		        resolveFailed: {
		          templateUrl: 'js/views/error.html'
		        }
		      })

		        .within()

		        	.segment('dashBoard',{
		        		default: true,
		        		templateUrl: 'js/views/dashBoard.html'
		        	})

		        	.segment('users', {
		        		templateUrl: 'js/views/users.html',
		        		controller: 'UsersCtrl',
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
		        	})

		        	.segment('userProfile', {
			        	templateUrl: 'js/views/userProfile.html',
			        	controller: 'userProfileCtrl',
		            resolve: {
		            	users: ['initialDataFactory', function(initialDataFactory) {
				            return 	initialDataFactory.getUsers();
				        	}],
				        	loginData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		var usrId = $rootScope.user._id;
				            return 	initialDataFactory.getUserLoginData(usrId);
				        	}],
				        	emailsData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		var usrEmail = $rootScope.user.email;
				            return 	initialDataFactory.getUserEmails(usrEmail);
				        	}],
		            },
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        }
			        })

		        .up()

	        .segment('login',{
	        	templateUrl: 'js/views/login.html',
            controller: 'LoginCtrl',
            resolve: {},
		        untilResolved: {
		          templateUrl: 'js/views/loading.html'
		        },
		        resolveFailed: {
		          templateUrl: 'js/views/error.html'
		        }
	        });

	    $routeProvider.otherwise({redirectTo: '/main/dash-board'});
	    $translateProvider.preferredLanguage('en');
	}]);

	app.run(['$rootScope', '$location', '$cookies', '$http', 'ngDialog', function($rootScope, $location, $cookies, $http, ngDialog){
    $rootScope.user = $cookies.getObject('user') || {};
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (!$rootScope.user.active) {
            $location.path('/login');
        }
    });

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (!$rootScope.user.active) {
            $location.path('/login');
        }
    });

			/**
			* Show dialog message
			* @params{string} - message
			*/
      $rootScope.showMessage = function(message){
        ngDialog.open({ template: 'js/views/popupTmpl.html' ,
            controller: ['$scope', function($scope) {
            $scope.message = message;
            }]
        });
      };
	}]);

}());