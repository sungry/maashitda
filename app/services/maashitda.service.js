(function() {
  'use strict';

  angular.module('maashitda').
    factory('MaashitdaService', MaashitdaService);

    function MaashitdaService() {
      var service = {
        getMockRestaurants: function() {
          var restaurants = [
          {
            Name: '15 Romolo',
            Cuisine: 'Contemporary American',
            Neighborhood: 'North Beach'
            Price: '$$',
            Keywords: ['vibrant', 'brunch', 'food', 'bar', 'cheap', 'foodie', 'cocktails', 'burger']
          },
          {
            Name: '1760',
            Cuisine: 'Californian',
            Neighborhood: 'Nob Hill'
            Price: '$$$',
            Keywords: ['vibrant', 'dinner', 'small plates', 'italian', 'sophisticated', 'foodie', 'delicious', 'cocktails']
          },
          {
            Name: 'Wise Sons Deli',
            Cuisine: 'Delicatessen',
            Neighborhood: 'Mission'
            Price: '$$',
            Keywords: ['vibrant', 'deli', 'food', 'kosher', 'casual','foodie', 'sandwich', 'reuben', 'jewish', 'corned beef', 'local' ]
          },
          {
            Name: 'Cotogna',
            Cuisine: 'Italian',
            Neighborhood: 'Finance District'
            Price: '$$$',
            Keywords: ['vibrant', 'brunch', 'dinner', 'italian', 'food', 'bar', 'foodie', 'obama', 'wine']
          }
          ];
        }
      };
      return service;
    }
})();
