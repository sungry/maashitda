(function() {
  'use strict';

  angular.module('maashitda').
    factory('MaashitdaService', MaashitdaService);

    function MaashitdaService($http) {
      var service = {
        getMockRestaurants: function() {
           return $http.get('/restaurants', {dataType: 'json'});
        }
      };
      return service;
    }
})();
