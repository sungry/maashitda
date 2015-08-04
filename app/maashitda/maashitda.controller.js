// IFFE here! since functions creates scope in js, this is to prevent polluting global scope.
(function() {
  'use strict'

    angular.module('maashitda').
  controller('MaashitdaController', MaashitdaController)

  function MaashitdaController( $scope, MaashitdaService) {
    $scope.restaurants = MaashitdaService.getMockRestaurants()
  }

})();


    // angular.module('maashitda').
  //   controller('MaashitdaController',[
  //     '$scope',
  //     function($scope, MaashitdaService) {
  //       MaashitdaService.getMockRestaurants()
  //     }])
