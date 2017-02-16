myTodoApp.factory('todoService', [function(){
	var todo = {};
	
	todo.todoList = [{title: "A New Task 001", done: false},{title: "A New Task 002", done: true},{title: "A New Task 003", done: false}]; 
	
	todo.allList = function(){
		return todo.todoList;
	}
	
	todo.completedList = function(){
		var completed = []; 
		angular.forEach(todo.todoList, function(value, key){
			if(value.done == true){
				completed.push(value); 
			}
		});
		
		return completed;
	}
	
	todo.activeList = function(){
		var active = []; 
		angular.forEach(todo.todoList, function(value, key){
			if(value.done == false){
				active.push(value); 
			}
		});
		return active;
	}
	
	todo.updateList = function(task){
		angular.forEach(todo.todoList, function(value, key){
			if(value.title == task.title){
				if(value.done){
					value.done = false;
				}else{
					value.done = true;
				}
			}
		});
	}
	
	return todo; 
}]); 