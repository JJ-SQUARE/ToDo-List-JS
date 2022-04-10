import { ToDo } from './to-do.classes';


export class ToDoList {


    constructor() {

        // this.toDos = [];
        this.loadLocalStorage()
    }

    newToDo(toDo) {
        this.toDos.push(toDo);
        this.saveLocalStorage();
    }

    removeToDo(id) {
        this.toDos = this.toDos.filter( toDo => toDo.id !== id )
        // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
        this.saveLocalStorage();
    }

    toggleToDo(id){
        for (const toDo of this.toDos){
            // console.log(id, toDo.id);
            
            if (toDo.id === id) {
                toDo.completed = !toDo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    removeCompleted() {
        this.toDos = this.toDos.filter( toDo => !toDo.completed )
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('toDo', JSON.stringify(this.toDos))
    }

    loadLocalStorage() {
        this.toDos = (localStorage.getItem('toDo')) ? JSON.parse(localStorage.getItem('toDo')) : [];

        this.toDos = this.toDos.map(object => ToDo.fromJSON(object))
     }
}