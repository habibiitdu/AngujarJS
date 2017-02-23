myRefApp.controller('referenceController', ['$scope', function($scope){
	$scope.addNew = false;
	$scope.allrefList = true;
	
	$scope.allRef = []; 
	
	$scope.refText = ""; 
	$scope.refSource = ""; 
	$scope.refLink = ""; 
	$scope.tag=""; 
	
	$scope.addNewRef = function(){
		$scope.addNew = true;
		$scope.allrefList = false;
	}
	
	$scope.cancelNewReference = function(){
		$scope.addNew = false;
		$scope.allrefList = true;
	}
	
	$scope.saveNewReference = function(){
		var newRef = {refText: $scope.refText, refSource: $scope.refSource, refLink: $scope.refLink, tag: $scope.tag}
		$scope.allRef.push(newRef); 
		
		$scope.refText = ""; 
		$scope.refSource = ""; 
		$scope.refLink = ""; 
		$scope.tag=""; 
		
		$scope.addNew = false;
		$scope.allrefList = true;
		
		
	}
}]); 