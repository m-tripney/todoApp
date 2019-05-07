function displayTodos() {
    console.log('My Todos:');
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
    }
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

let todos = ['Item 1', 'Item 2', 'Item 3'];
addTodo('Item 4');
changeTodo(0, 'First Item');
deleteTodo(3);
