(function() {
    'use strict';
    /*
    *	Global search
    */
    angular
        .module('blacktweetyApp')
        .directive('search', search);

    search
        .$inject = [
        '$filter',
        '$rootScope',
        'searchFactory',
        '_'
    ];

    function search($filter, $rootScope, searchFactory, _) {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            templateUrl: 'js/directives/search.html',
            link: function(scope) {

                scope.searchText = '';
                scope.showLoader = false;
                scope.searchData = {};

                function init(){
                    angular.forEach(searchFactory, function(item, name){
                        if(_.isArray(item)) { scope.searchData[name] = {name: name, data: item}; }
                    });
                }
                init();

                scope.search = function(){
                    scope.showLoader = true;

                    searchFactory.search(scope.searchText);
                }
            }
        };
    }

})();
