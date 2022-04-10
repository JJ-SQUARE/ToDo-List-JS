import { ToDo } from './to-do.classes.js';
import { ToDoList } from './to-do-list.classes';
import { createToDoHTML } from '../component.js';

export {
    ToDo,
    ToDoList
}

const toDoList = new ToDoList();
toDoList.toDos.forEach(createToDoHTML);

// console.log(toDoList.ToDo[0]);