myTodoApp.controller('myTodoController', ['$scope','todoService', function($scope, todoService){
	$scope.task = todoService.todoList; 
	$scope.showSetting = false; 
	
	$scope.newTask = ""; 
	
	$scope.addNewTask = function(){
		if($scope.newTask != ""){
			todoService.todoList.push({title: $scope.newTask, done: false}); 
			$scope.newTask = ""; 
		}
	}
	
	$scope.showSettings = function(){
		if($scope.showSetting){
			$scope.showSetting = false;
		}else{
			$scope.showSetting = true;
		}
		
	}
	
	$scope.editTask = function(task){
		
	}
	
	$scope.deleteTask = function(task){
		todoService.deleteTask(task); 
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