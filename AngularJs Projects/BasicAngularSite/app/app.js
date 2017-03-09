'use strict';

// Declare app level module which depends on views, and components
angular.module('myAngularApp', [
  'ngRoute',
  'myAngularApp.home',
  'myAngularApp.service',
  'myAngularApp.project',
  'myAngularApp.download',
  'myAngularApp.contact',
  'myAngularApp.about',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
