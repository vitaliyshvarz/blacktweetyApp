(function () {
    'use strict';

    /**
    * @ngdoc service
    * @name blacktweetyApp.uploadFactory
    * @description
    * # uploadFactory
    * Factory in the blacktweetyApp.
    */
    angular.module('blacktweetyApp').factory('uploadFactory', uploadFactory);

    uploadFactory
        .$inject = [
        'userService',
        'BLOG_IMAGE_UPLOAD',
        '$rootScope',
        'Upload',
        '$q'
    ];

    function uploadFactory(
        userService,
        BLOG_IMAGE_UPLOAD,
        $rootScope,
        Upload,
        $q
        ) {

        function uploadImage(file){
            var q = $q.defer();
            Upload.upload({
                url: BLOG_IMAGE_UPLOAD,
                file: file,
                fields: {
                    'username': 'admin',
                    'blog': 'blog',
                    'extention': file.name.split('.').pop(),
                    'userId': $rootScope.user._id
                },
            }).progress(function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' +
                          evt.config.file.name + '\n');
            }).success(function (data, status, headers, config) {
                console.log('file: ' + config.file.name + ', Response: ' +
                JSON.stringify(data) + '\n');
                q.resolve(data);
                $rootScope.$broadcast('IMAGE_UPLOADED');
            });

            return q.promise;
        }

        return {
            uploadImage: uploadImage,
        };
    }

}());

