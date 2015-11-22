(function () {
    'use strict';

    /**
     * Blog controller of blacktweetyApp
     */
    angular.module('blacktweetyApp').controller('UploadImageModalInstance', UploadImageModalInstance);

    UploadImageModalInstance
        .$inject = [
        '$scope',
        'Upload',
        'uploadFactory',
        'USER_PHOTO_UPLOAD'
    ];

    function UploadImageModalInstance($scope, Upload, uploadFactory, USER_PHOTO_UPLOAD) {

            $scope.showAddButton = false;
            $scope.files = [];

            $scope.upload = function(){
                uploadFactory.uploadImage($scope.files[0]).then(function(res){
                    $scope.showAddButton = true;
                    $scope.image = res.data;
                    $scope.closeThisDialog($scope.image)
                });
            };
    }

}());
