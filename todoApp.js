let todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos:');
        for (let i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i]);
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

/*
TEST CODE
*/

// todoList.addTodo('Item 1');
// todoList.changeTodo(0, 'First Item');
// todoList.toggleCompleted(0);
