(function() {
    'use strict';
    /*
    *	Image uploader
    */
    angular
        .module('blacktweetyApp')
        .directive('imageUploader', imageUploader);

    imageUploader
        .$inject = [
        'uploadFactory'
    ];

    function imageUploader(uploadFactory) {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            templateUrl: 'js/directives/imageUploader.html',
            link: function(scope) {

            /*
            * remove selected image
            */
            scope.removeImage = function(){
                scope.files = [];
            };

            /*
            * upload Image
            * @params{array} files
            */
            scope.uploadImage = function () {
              uploadFactory.uploadImage(scope.files[0]);
            };

            }
        };
    }

})();
