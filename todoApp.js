let todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        this.todos[position].completed = !this.todos[position].completed;
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
    }
};

let handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
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
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById(
            'toggleCompletedPositionInput'
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.value);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    }
};

let view = {
    displayTodos: function() {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; // Clear display each time function is run
        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement('li');
            let todoTextWithCompletion = '';
            if (todoList.todos[i].completed === true) {
                todoTextWithCompletion =
                    todoList.todos[i].todoText + ' (Completed)';
            } else {
                todoTextWithCompletion =
                    todoList.todos[i].todoText + ' (Incomplete)';
            }
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        // 'Event delegation'
        let todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event) {
            let elementClicked = event.target;
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
