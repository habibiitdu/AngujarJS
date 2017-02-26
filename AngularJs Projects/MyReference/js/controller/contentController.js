myRefApp.controller('referenceController', ['$scope','contentService', function($scope, contentService){
	$scope.addNew = false;
	$scope.allrefList = true;
	$scope.refDetails = false;
	
	$scope.allRef = contentService.getAllRef(); 
	$scope.allTags = contentService.getAllTags(); 
	
	$scope.refText = ""; 
	$scope.refSource = ""; 
	$scope.refLink = ""; 
	$scope.tag=""; 
	
	$scope.addNewRef = function(){
		$scope.addNew = true;
		$scope.allrefList = false;
		$scope.refDetails = false;
	}
	
	$scope.cancelNewReference = function(){
		$scope.addNew = false;
		$scope.allrefList = true;
		$scope.refDetails = false;
	}
	
	$scope.saveNewReference = function(){
		var newRef = {refId: 0001, refText: $scope.refText, refSource: $scope.refSource, refLink: $scope.refLink, date:'23-02-2017', tag: $scope.tag, rating:1, refUserid: 111}
				
		contentService.saveNewReference(newRef); 
		
		$scope.refText = ""; 
		$scope.refSource = ""; 
		$scope.refLink = ""; 
		$scope.tag=""; 
		
		$scope.addNew = false;
		$scope.allrefList = true;
		$scope.refDetails = false;		
		
		$scope.allTags = contentService.getAllTags(); 
	}
	
	$scope.showTagDetails = function(ref){
		$scope.refDetails = true;
		$scope.allrefList = false;
		$scope.showingRef = ref; 
	}
	
	$scope.cancelShowDetail = function(){
		$scope.refDetails = false;
		$scope.allrefList = true;
	}
}]); 