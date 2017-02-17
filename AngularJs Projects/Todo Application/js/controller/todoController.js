myTodoApp.controller('myTodoController', ['$scope','todoService', function($scope, todoService){

	$scope.task = todoService.todoList; 
	$scope.showSetting = false; 
	$scope.edit = false;
	$scope.editingTask = {};
	$scope.newTaskHeader = "Enter A New Task"; 
	$scope.ediTaskHeader = "Edit Task"; 
	$scope.taskHeader = $scope.newTaskHeader;
	
	
	$scope.newTask = ""; 
	
	$scope.addNewTask = function(){
		if($scope.newTask != ""){
			var newTask = {title: $scope.newTask, done: false}; 
			todoService.addNewTask(newTask); 
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
		$scope.edit = true;
		$scope.newTask = task.title;
		$scope.editingTask = task;
		$scope.taskHeader = $scope.ediTaskHeader; 
	}
	
	$scope.saveEdit = function(){
		todoService.editTask($scope.editingTask, $scope.newTask);
		$scope.newTask = "";
		$scope.editingTask={}; 
		$scope.edit = false;
		$scope.taskHeader = $scope.newTaskHeader;
	}
	
	$scope.deleteTask = function(task){
		todoService.deleteTask(task); 
		$scope.newTask = "";
		$scope.editingTask={}; 
		$scope.edit = false;
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