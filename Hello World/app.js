var helloApp = angular.module('helloApp',[]); 

helloApp.controller('helloController',['$scope',function($scope){
    $scope.sampleText = "Hello World from AngularJs"; 
}]); 