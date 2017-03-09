'use strict';

angular.module('myAngularApp.project',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/project',{
		templateUrl: 'templates/project/project.html',
		controller: 'ProjectCtrl'
	});
}])
.controller('ProjectCtrl', ['$scope', function($scope){
	console.log("This is from Project Controller"); 
}]);