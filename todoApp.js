let todoList = {
    todos: [],
    displayTodos: function() {
        if (Array.isArray(this.todos) && this.todos.length === 0) {
            console.log('Your Todo list is empty.');
        } else {
            console.log('My Todos:');
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log(this.todos[i].todoText, '(Complete)');
                } else {
                    console.log(this.todos[i].todoText, '(Incomplete)');
                }
            }
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

// todoList.displayTodos();
// todoList.addTodo('Item 1');
// todoList.addTodo('Item 2');
// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(0);
