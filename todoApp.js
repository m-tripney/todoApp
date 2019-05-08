let todoList = {
    todos: [],
    displayTodos: function() {
        if (Array.isArray(this.todos) && this.todos.length === 0) {
            console.log('Your Todo list is empty.');
        } else {
            console.log('My Todos:');
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log(this.todos[i].todoText + ' (Complete)');
                } else {
                    console.log(this.todos[i].todoText + ' (Incomplete)');
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
        this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let completedTodos = 0;
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === this.todos.length) {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

let handlers = {
    displayTodos: function() {
        todoList.toggleAll();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById(
            'changeTodoPositionInput'
        );
        let changeTodoTextInput = document.getElementById(
            'changeTodoTextInput'
        );
        todoList.changeTodo(
            changeTodoPositionInput.value,
            changeTodoTextInput.value
        );
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById(
            'deleteTodoPositionInput'
        );
        todoList.deleteTodo(deleteTodoPositionInput.value);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById(
            'toggleCompletedPositionInput'
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.value);
    }
};
