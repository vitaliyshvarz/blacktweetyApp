(function () {
    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.blogFactory
    * @description
    * # blogFactory
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('blogFactory', blogFactory);

    blogFactory
        .$inject = [
        'userService',
        'BLOG_IMAGE_UPLOAD'
    ];

    function blogFactory(
        userService,
        BLOG_IMAGE_UPLOAD
        ) {

        function uploadImage(){

        }

        return {
            uploadImage: uploadImage,
        };
    }

}());

