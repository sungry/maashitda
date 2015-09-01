// calls this function immediately
(function() {
  'use strict';

  angular.module('maashitda')
    .config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to the welcome page
      $urlRouterProvider.otherwise('welcome');
      //
      // Now set up the states
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          templateUrl: 'app/welcome/welcome.html'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'app/restaurant-search/restaurant-search.html',
          controller: 'RestaurantSearchController'
        })
      });

})();
