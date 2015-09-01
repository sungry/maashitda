// IIFE here! since functions creates scope in js, this is to prevent polluting global scope.
(function() {
  'use strict'

  angular.module('maashitda').
    controller('RestaurantSearchController', RestaurantSearchController)

  function RestaurantSearchController( $scope, MaashitdaService) {
    $scope.loaded = false;
    MaashitdaService.getMockRestaurants()
    .then(function(response) {
      $scope.restaurants = response.data.restaurants;
      $scope.loaded = true;
    })
    .catch(function(err) {
        $scope.error = err.message;
    });
  }
})();
