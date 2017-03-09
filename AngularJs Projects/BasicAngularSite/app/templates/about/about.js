'use strict'

angular.module('myAngularApp.about', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/about', {
		templateUrl: 'templates/about/about.html',
		controller: 'AboutCtrl'
	});
}])
.controller('AboutCtrl', ['$scope', function($scope){
	console.log('This is from About controller'); 
}]);