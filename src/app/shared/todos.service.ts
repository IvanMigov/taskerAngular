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

  private todosList: Todo[] = [];
  private curretTodoId: number;
  constructor(private http: Http) {}


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
          console.log("todos",todos);
          this.todosList = todos;
          this.todosChanged.next(this.todosList);
          this.currentTodoChanged.next(this.getCurrentTodo());
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
    console.log('setCurrentTodo');
    this.curretTodoId = id;
  }


}
