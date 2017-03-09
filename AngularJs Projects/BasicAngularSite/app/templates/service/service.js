'use strict';

angular.module('myAngularApp.service',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/service', {
		templateUrl: 'templates/service/service.html',
		controller: 'ServiceCtrl'
	});
}])
.controller('ServiceCtrl', ['$scope', function($scope){
	console.log(' I am service Controller'); 
}])