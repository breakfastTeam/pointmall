(function () {

    'use strict';

    angular
    .module('app')
    .factory('APIAdService', APIAdService);

    APIAdService.$inject = ['$http', '$q', '$timeout', 'CacheFactory', 'ENUM'];

    function APIAdService($http, $q, $timeout, CacheFactory, ENUM) {

        var service = new APIEndpoint( $http, $q, $timeout, CacheFactory, 'APIAdService' );
        service.list = _list;
        return service;

        function _list( params ) {
            return this.fetch( '/api.ad.list', params, true, function(res){
                return ENUM.ERROR_CODE.OK == res.data.errorCode ? res.data.result : null;
            });
        }

    }

})();
