import './styles.css';
import { ToDo, ToDoList } from './js/classes/';
import { createToDoHTML } from './js/component';

export const toDoList = new ToDoList();

// toDoList.toDos.forEach(createToDoHTML);
// toDoList.toDos.forEach(toDo => createToDoHTML(toDo)); // Lo mismo que arriba.

// toDoList.toDos[0].clgClass()
