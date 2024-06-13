let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos(todos);
    }
}

function renderTodos(tasks) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    tasks.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(index);
        
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos(todos);
}

function filterTodos() {
    const filterText = document.getElementById('filterInput').value.toLowerCase();
    const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(filterText));
    renderTodos(filteredTodos);
}

function sortTodos() {
    todos.sort();
    renderTodos(todos);
}
