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
        'BLOG_IMAGES',
        'tinymceOptions'
    ];

    function addBlogPost(
        $translate, 
        $routeSegment, 
        $timeout, 
        $location, 
        $rootScope, 
        BLOG_IMAGES, 
        tinymceOptions
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
            controller: function($scope, $element){
                function init(){
                    tinymceOptions.tinyvision.upload = function(){
                        $('#myModal').modal('show');
                    }
                    tinymceOptions.tinyvision.source =  BLOG_IMAGES;
                    debugger;
                    $scope.tinymceOptions = tinymceOptions;  
                }
                init();
                $rootScope.$on('IMAGE_UPLOADED', function(){
                    init();
                });
            },
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
