import { ToDo } from './classes/to-do.classes.js'
import { ToDoList } from './classes/to-do-list.classes'
import { toDoList } from '../index';


const divToDoList   = document.querySelector('.todo-list');
const textInput     = document.querySelector('.new-todo');
const btnDeleteC    = document.querySelector('.clear-completed');
const ulFilters     = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createToDoHTML = (toDo) => {

    const htmlToDo = `
        <li class="${(toDo.completed ? 'completed': '')}" data-id="${toDo.id}">
			<div class="view">
                <input class="toggle" type="checkbox" ${toDo.completed ? 'checked':''}>
                <label>${toDo.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);
    return div.firstElementChild;
}

// events

textInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && textInput.value.length > 0) {
        const newToDoTyped = new ToDo(textInput.value);
        toDoList.newToDo(newToDoTyped);
        createToDoHTML(newToDoTyped);
        textInput.value = '';
    }
//    console.log(textInput.value); 
});

divToDoList.addEventListener('click', (event) =>{
    const elementName = event.target.localName;
    const toDoElement = event.target.parentElement.parentElement;
    const toDoId = toDoElement.getAttribute('data-id') * 1;

    if (elementName.includes('input')) {
        toDoList.toggleToDo(toDoId);
        toDoElement.classList.toggle('completed');
    } else if (elementName.includes('button')) {
        toDoList.removeToDo(toDoId);
        divToDoList.removeChild(toDoElement);
    }
});

btnDeleteC.addEventListener('click', () => {
    toDoList.removeCompleted();
    for (let i = divToDoList.children.length - 1; i >= 0; i--) {
        const element = divToDoList.children[i];
        if (element.classList.contains('completed')) {
            divToDoList.removeChild(element)
        }
    }

});

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if(!filter) {return;}
    
    anchorFilters.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const element of divToDoList.children) {
        element.classList.remove('hidden');
        const completedToDo = element.classList.contains('completed');
        
        switch(filter) {

            case 'Pendientes':
                if(completedToDo) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completedToDo) {
                    element.classList.add('hidden');
                }
            break;
        }
    }
});