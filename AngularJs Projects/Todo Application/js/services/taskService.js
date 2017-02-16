myTodoApp.factory('todoService', [function(){
	var todo = {};
	
	/*todo.todoList = [{title: "A New Task 001", done: false},{title: "A New Task 002", done: true},{title: "A New Task 003", done: false}]; */
	
	todo.saved = localStorage.getItem('todos');
	todo.todoList = (localStorage.getItem('todos')!==null) ? JSON.parse(todo.saved) : [ {title: 'Learn AngularJS', done: false}, {title: 'Build an Angular app', done: false},{title: "A New Task 001", done: false},{title: "A New Task 002", done: true},{title: "A New Task 003", done: false} ];
	localStorage.setItem('todos', JSON.stringify(todo.todoList));
	
	
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
		localStorage.setItem('todos', JSON.stringify(todo.todoList)); 
	}
	
	todo.addNewTask = function(task){
		todo.todoList.push(task); 
		localStorage.setItem('todos', JSON.stringify(todo.todoList)); 
	}
	
	todo.deleteTask = function(task){
		var index = todo.todoList.indexOf(task);
		todo.todoList.splice(index,1);
		localStorage.setItem('todos', JSON.stringify(todo.todoList));
	}
	
	todo.editTask = function(task, editedTitle){
		task.title = editedTitle;
		localStorage.setItem('todos', JSON.stringify(todo.todoList));
	}
	
	return todo; 
}]); 