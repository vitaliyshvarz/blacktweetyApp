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
        'imageService',
        '$q'
    ];

    function blogFactory(
        imageService,
        $q
        ) {

        /**
        * Get all image data
        */
        function getImageData(){

        }

        return {
            getImageData: getImageData,
        };
    }

}());

