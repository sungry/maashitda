// IFFE here! since functions creates scope in js, this is to prevent polluting global scope.
(function() {
  'use strict'

  angular.module('maashitda').
    controller('MaashitdaController',[
      '$scope',
      function($scope) {
        $scope.test = 'Hello world!';
        $scope.restaurants = [
          {
            name: '15 Romolo',
            cuisine: 'Contemporary American',
            neighborhood: 'North Beach',
            price: '$$',
            keywords: ['vibrant', 'brunch', 'food', 'bar', 'cheap', 'foodie', 'cocktails', 'burger']
          },

          {
            name: '1760',
            cuisine: 'Californian',
            neighborhood: 'Nob Hill',
            price: '$$$',
            keywords: ['vibrant', 'dinner', 'small plates', 'italian', 'sophisticated', 'foodie', 'delicious', 'cocktails']

          },
          {
            name: 'Wise Sons Deli',
            cuisine: 'Delicatessen',
            neighborhood: 'Mission',
            price: '$$',
            keywords: ['vibrant', 'deli', 'food', 'kosher', 'casual','foodie', 'sandwich', 'reuben', 'jewish', 'corned beef', 'local' ]
          },
          {
            name: 'Cotogna',
            cuisine: 'Italian',
            neighborhood: 'Finance District',
            price: '$$$',
            keywords: ['vibrant', 'brunch', 'dinner', 'italian', 'food', 'bar', 'foodie', 'obama', 'wine']
          }
          ];
      }])
})();

