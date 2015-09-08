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
        '$location',
        '$routeSegment',
        '_'
    ];

    function search($filter, $rootScope, searchFactory, $location, $routeSegment, _) {
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
                    angular.forEach(searchFactory.searcher, function(item, name){
                        if(_.isArray(item)) { scope.searchData[name] = {name: name, data: item}; }
                    });
                    scope.showLoader = false;
                }
                init();

                scope.search = function(){
                    scope.showLoader = true;
                    if(scope.searchText.length > 1){
                        searchFactory.searcher.search(scope.searchText);
                    }
                };

                scope.noData = function(){
                    var data = 0;
                    angular.forEach(searchFactory.searcher, function(collection){
                        if(_.isArray(collection) && collection.length > 0){ data++; }
                    });
                    return !!data ? false : true;
                };

                scope.openItem = function(path){
                    $location.path(path);
                };

                $rootScope.$on('SEARCH', function () {
                    init();
                });

            }
        };
    }

})();
