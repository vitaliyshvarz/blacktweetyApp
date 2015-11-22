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
			'textAngular',
			'underscore'
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
	        .when('/main/users/:id',      'main.user')
	        .when('/main/messages',       'main.messages')
	        .when('/main/messages/:id',   'main.message')
	        .when('/main/blog',           'main.blog')

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
		        		templateUrl: 'js/views/dashBoard.html',
		        		controller: 'DashboardCtrl',
		        		resolve: {
				        	emailsData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		var usrEmail = $rootScope.user.email;
				            return 	initialDataFactory.getUserEmails(usrEmail);
				        	}]
		            },
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        }
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

		        	.segment('user', {
		        		templateUrl: 'js/views/user.html',
		        		controller: 'UserCtrl',
		        		resolve: {
		        			user: ['$routeParams', 'userFactory', function($routeParams, userFactory){
		        				return userFactory.getUserById($routeParams.id);
		        			}],
		        			users: ['initialDataFactory', function(initialDataFactory) {
				            return 	initialDataFactory.getUsers();
				        	}],
		            },
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        },
				        dependencies: ['id']
		        	})

		        	.segment('messages', {
		        		templateUrl: 'js/views/messages.html',
		        		controller: 'MessagesCtrl',
		        		resolve: {
				        	emailsData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		var usrEmail = $rootScope.user.email;
				            return 	initialDataFactory.getUserEmails(usrEmail);
				        	}],
				       		users: ['initialDataFactory', function(initialDataFactory) {
				            return 	initialDataFactory.getUsers();
				        	}],
		            },
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        },
				        dependencies: ['id']
		        	})

		        	.segment('message',{
		        		templateUrl: 'js/views/message.html',
		        		controller: 'MessageCtrl',
		        		resolve: {
		        			emailsData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		var usrEmail = $rootScope.user.email;
				            return 	initialDataFactory.getUserEmails(usrEmail);
				        	}],
		        			message: ['$routeParams', 'emailFactory', function($routeParams, emailFactory){
		        				return emailFactory.getEmailById($routeParams.id);
		        			}],
		        			users: ['initialDataFactory', function(initialDataFactory) {
				            return 	initialDataFactory.getUsers();
				        	}],
		        		},
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        },
				        dependencies: ['id']
		        	})

		        	.segment('blog', {
		        		templateUrl: 'js/views/blog.html',
		        		controller: 'BlogCtrl',
		        		resolve: {
		        			blogData: ['initialDataFactory', '$rootScope', function(initialDataFactory, $rootScope) {
		            		// var usrEmail = $rootScope.user.email;
				            // return 	initialDataFactory.getUserEmails(usrEmail);
				        	}]
		        		},
				        untilResolved: {
				          templateUrl: 'js/views/loading.html'
				        },
				        resolveFailed: {
				          templateUrl: 'js/views/error.html'
				        },
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