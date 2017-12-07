import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {Todo} from './todo.model';
const requestUrl = 'http://localhost:3004/todos';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();

  private todosList: Todo[] = [];
  constructor(private http: Http) {}

  // storeRecipes() {
  //   return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  // }

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
        }
      );
  }
  getTodos() {
    console.log('getTodos',this.todosList);
    return this.todosList;
  }


}
