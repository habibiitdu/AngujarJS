'use strict';

angular.module('myAngularApp.home',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'templates/home/home.html',
		controller: 'HomeCtrl'
	});
}])
.controller('HomeCtrl', ['$scope', function($$scope){
	console.log("Home Controller"); 
}] );