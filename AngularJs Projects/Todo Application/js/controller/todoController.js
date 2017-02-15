myTodoApp.controller('myTodoController', ['$scope', function($scope){
	$scope.task = ["A New Task 01","A New Task 02","A New Task 03"]; 
	
	$scope.newTask = ""; 
	
	$scope.addNewTask = function(){
		if($scope.newTask != ""){
			$scope.task.push($scope.newTask); 
			$scope.newTask = ""; 
		}
	}
}]); 