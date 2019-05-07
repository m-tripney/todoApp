let todoList = {
    todos: ['Item 1', 'Item 2', 'Item 3'],
    displayTodos: function() {
        console.log('My Todos:');
        for (let i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i]);
        }
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

/*
TEST CODE
*/

// todoList.displayTodos();
// todoList.addTodo('Item 4');
// todoList.changeTodo(0, 'First Item');
// todoList.deleteTodo(0);
