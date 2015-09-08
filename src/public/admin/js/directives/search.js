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
                    angular.forEach(searchFactory.searcher, function(item, name){
                        if(_.isArray(item)) { scope.searchData[name] = {name: name, data: item}; }
                    });
                    scope.showLoader = false;
                }
                init();

                scope.search = function(){
                    scope.showLoader = true;
                    searchFactory.searcher.search(scope.searchText);
                };

                scope.noData = function(){
                    var data = 0;
                    angular.forEach(searchFactory.searcher, function(collection){
                        if(_.isArray(collection) && collection.length > 0){ data++; }
                    });
                    return !!data ? false : true;
                };

                $rootScope.$on('SEARCH', function () {
                    init();
                });

            }
        };
    }

})();
