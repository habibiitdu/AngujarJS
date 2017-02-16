myTodoApp.controller('myTodoController', ['$scope','todoService', function($scope, todoService){
	$scope.task = todoService.todoList; 
	
	$scope.newTask = ""; 
	
	$scope.addNewTask = function(){
		if($scope.newTask != ""){
			todoService.todoList.push({title: $scope.newTask, done: false}); 
			$scope.newTask = ""; 
		}
	}
	
	$scope.getAllTask = function(){
		$scope.task = todoService.allList(); 
	}
	
	$scope.getCompletedTask = function(){
		$scope.task = todoService.completedList();
	}
	
	$scope.getActiveTask = function(){
		$scope.task = todoService.activeList();
	}
	
	$scope.updateList = function(task){
		todoService.updateList(task); 
	}
}]); 