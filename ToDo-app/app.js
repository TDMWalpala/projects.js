const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todo-list');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        addTodo(todo);
    })
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo();
    
});

function addTodo(todo){

    const todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }
        
        todoEl.innerHTML = todoText;
        todoEl.addEventListener('click', ()=>{
            todoEl.classList.toggle('completed');
        });
        todoEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoEl.remove();
        });
        todosUL.appendChild(todoEl);

        input.value = '';
        store();
    }
}


function store(){
    const todosEl = document.querySelectorAll('li');

    const todos = [];
    todosEl.forEach(todoEl =>{
        todos.push({
            text: todoEl.innerHTML, completed: todoEl.classList.contains('completed')
        });

        localStorage.setItem('notes', JSON.stringify(todos));

    });
}