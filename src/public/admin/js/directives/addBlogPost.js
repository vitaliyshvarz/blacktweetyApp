(function() {
    'use strict';
    /*
    *	Add new blog post directive
    *
    */
    angular.module('blacktweetyApp').directive('addBlogPost', addBlogPost);

    addBlogPost
        .$inject = [
        '$translate',
        '$routeSegment',
        '$timeout',
        '$location',
        '$rootScope',
        'BLOG_IMAGES'
    ];

    function addBlogPost(
        $translate, 
        $routeSegment, 
        $timeout, 
        $location, 
        $rootScope, 
        BLOG_IMAGES
        ) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                user: '=user',
                categories: '=categories',
                post: '=post',
                images: '=images'
            },
            templateUrl: 'js/directives/addBlogPost.html',

            link: function(scope, $transclude) {

            scope.newPost = _.extend({
                userId: $rootScope.user._id,
                date: new Date(),
                category: [],
                tags: [],
                title: '',
                content: '',
                status: 1
            }, scope.post);

            scope.showSpinner = false;

            scope.createBlogPost = function(){

            };

            $rootScope.$on('BLOG_POST_SUBMITED', function(){
                scope.showSpinner = false;
            });

            }
        };
    }

})();
