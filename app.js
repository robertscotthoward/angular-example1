(function() {
  'use strict';

  angular
    .module('demoApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/one', { templateUrl: '/one.html', controller: 'PageCtrl' })
        .when('/two', { templateUrl: '/two.html', controller: 'PageCtrl' })
        .when('/three', { templateUrl: '/three.html', controller: 'PageCtrl' })
        .otherwise({ redirectTo: '/one' });
    }])
    .controller('PageCtrl', ['$scope', function($scope) {
      // placeholder for potential dynamic behavior per route
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
      $rootScope.isActive = function(path) {
        return $location.path() === path;
      };
    }]);
})();



