(function () {

    'use strict';

    /**
    * @name blacktweetyApp.searchFactory
    * @description
    * # userFactory
    * Factory performs global search in all DB collections
    * Element is the id of the block where search method will append results
    */
    angular.module('blacktweetyApp').factory('searchFactory', searchFactory);

    searchFactory
        .$inject = [
        'glUsersSearchService',
        'glMessagesSearchService',
        'glBlogSearchService',
        '$rootScope',
        '$q'
    ];

    function searchFactory(
        glUsersSearchService,
        glMessagesSearchService,
        glBlogSearchService,
        $rootScope,
        $q
        ) {

        var searcher = Object.create({},{
            userSearch: {value: userSearch},
            messagesSearch: {value: messagesSearch},
            blogSearch: {value: blogSearch},
            users: { value: [], enumerable: true, writable: true},
            messages: { value: [], enumerable: true, writable: true},
            blogPosts: { value: [], enumerable: true, writable: true},
            searchVal: { value: '' , enumerable: true, writable: true},
            search: {value: search}
        });

        return {
            searcher: searcher
        };
        /*jshint validthis: true */
        function userSearch(){
            var q = $q.defer();
            glUsersSearchService.post({'search': this.searchVal}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }
        function messagesSearch(){
            var q = $q.defer();
            glMessagesSearchService.post({'search': this.searchVal}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }
        function blogSearch(){
            var q = $q.defer();
            glBlogSearchService.post({'search': this.searchVal}).$promise.then(
                function(result) { q.resolve(result); },
                function(error) { q.reject( error ); });
            return q.promise;
        }

        function applyResults(result){
            this.users = result[0];
            this.messages = result[1];
            this.blogPosts = result[2];
        }

        function search(value) {
            this.searchVal = value;
            var userSearch = this.userSearch(),
                messagesSearch = this.messagesSearch(),
                blogSearch = this.blogSearch(),
                searcher = this;

            $q.all([userSearch, messagesSearch, blogSearch]).
                then(function(result){
                    applyResults.call(searcher, result);
                    $rootScope.$broadcast('SEARCH');
                });
        }
        /*jshint validthis: false */

    }

}());