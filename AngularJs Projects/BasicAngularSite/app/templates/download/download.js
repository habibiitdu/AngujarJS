'use strict'
angular.module('myAngularApp.download',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/download', {
		templateUrl: 'templates/download/download.html',
		controller: 'DownloadCtrl'
	});
}])
.controller('DownloadCtrl', ['$scope', function($scope){
	console.log('its from download controller'); 
}])