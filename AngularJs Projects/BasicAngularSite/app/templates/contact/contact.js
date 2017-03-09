'use strict';

angular.module('myAngularApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact/contact.html',
		controller: 'ContactCtrl'
	});
}])
.controller('ContactCtrl', ['$scope', function($scope){
	console.log("This is from Contact Controller"); 
}]);