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
        '$q'
    ];

    function searchFactory($q) {

        var proto = {
            userSearch: userSearch,
            messagesSearch: messagesSearch,
            blogSearch: blogSearch,
        };

        function userSearch(){

        }
        function messagesSearch(){

        }
        function blogSearch(){
            //
        }

        function search(value) {
            
        }

        return Object.create(proto,{
            users: { value: [], enumerable: true, writable: true},
            messages: { value: [], enumerable: true, writable: true},
            blogPosts: { value: [], enumerable: true, writable: true},
            searchVal: { value: '' , enumerable: true, writable: true},
            search: {value: search}
        });
    }

}());