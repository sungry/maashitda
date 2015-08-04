// IFFE here! since functions creates scope in js, this is to prevent polluting global scope.
(function() {
  'use strict'

  angular.module('maashitda').
    controller('MaashitdaController', MaashitdaController)

  function MaashitdaController( $scope, MaashitdaService) {
    MaashitdaService.getMockRestaurants()
      .then(function(response) {
        $scope.restaurants = response.data.restaurants;
      })
      .catch(function(err) {
          $scope.error = err.message;
        });
    }
})();
