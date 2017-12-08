import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {Todo} from './todo.model';
const requestUrl = 'http://localhost:3004/todos';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();
  currentTodoChanged = new Subject<Todo>();
  showModalChanged = new Subject<boolean>();

  private todosList: Todo[] = [];
  private curretTodoId: number;
  private showModal = false;
  constructor(private http: Http) {}

  showModalDialog(){
    this.showModal = true;
    this.showModalChanged.next(true);
  }
  hideModalDialog(){
    this.showModal = false;
    this.showModalChanged.next(false);
  }
  getModalDialogState(){
    return this.showModal;
  }
  fetchTodos() {
    this.http.get(requestUrl)
      .map(
        (response: Response) => {
          const todos: Todo[] = response.json();
          let orderedTodos = [];
          const todosOrder = todos.find(todo => todo.id === 0)['order'];
          todosOrder.forEach((todoId) =>{
            let todoIndex = null;
            const todoData = todos.find((todo, index) => {
              todoIndex = index;
              return todo.id === todoId
            });
            if(todoData){
              orderedTodos.push(todoData);
              todos.splice(todoIndex, 1)
            }
          });
          todos.splice(0, 1);
          return [...orderedTodos,...todos];
        }
      )
      .subscribe(
        (todos: Todo[]) => {
          this.todosList = todos;
          this.todosChanged.next(this.todosList);
          this.currentTodoChanged.next(this.getCurrentTodo());
        }
      );
  }
  saveToDo(todo:Todo) {
    this.http.patch(`${requestUrl}/${todo.id}`,todo)
      .subscribe(
        (response: Response) => {
          this.fetchTodos();
        }
      );
  }
  saveNewToDo(todo:Todo) {
    this.http.post(`${requestUrl}`,todo)
      .subscribe(
        (response: Response) => {
          this.fetchTodos();
        }
      );
  }
  getTodos() {
    return this.todosList;
  }
  getCurrentTodo() {
    return (this.todosList.find(todo => todo.id === this.curretTodoId)) || new Todo();
  }
  setCurrentTodoId(id:number) {
    this.curretTodoId = id;
  }


}
