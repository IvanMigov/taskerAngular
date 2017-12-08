import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TodosService } from '../../shared/todos.service';
import { Todo } from '../../shared/todo.model';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos:Todo[] = [];
  filters:{};
  subscription: Subscription[];
  // todos = [
  //   {
  //     id: 250,
  //     date: "07/19/2017",
  //     label: "home",
  //     status: "ToDo",
  //     priority: "high",
  //     toDoStatus: "ToDo",
  //     title: "250 Home cleaning ",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cul"
  //   },
  //   {
  //     id: 251,
  //     date: "06/23/2017",
  //     label: "work",
  //     status: "InProgress",
  //     priority: "normal",
  //     toDoStatus: "ToDo",
  //     title: "251 Resolve issue ",
  //     description: "Resolve issue in css88"
  //   },
  //   {
  //     id: 252,
  //     date: "06/18/2017",
  //     label: "home",
  //     status: "InProgress",
  //     priority: "normal",
  //     toDoStatus: "ToDo",
  //     title: "252/3 Feed a cat package and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i",
  //     description: "Buy a feed for a cat"
  //   }
  // ];
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    let todosSubscription = this.todosService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todos = this.applyFilters(todos);
        }
      );
    let filterSubscription = this.todosService.filtersChanged
      .subscribe(
        (filters: {}) => {
          this.filters = filters;
          this.todos = this.applyFilters(this.todosService.getTodos());
        }
      );
    this.todosService.fetchTodos();
    this.todos = this.applyFilters(this.todosService.getTodos());
    this.filters = this.todosService.getFiltersSet();
    this.subscription = [todosSubscription,filterSubscription]
  }
  applyFilters(todos: Todo[]):Todo[]{
    return todos.filter(todo => this.filters[todo.status])
  }
  ngOnDestroy() {
    this.subscription.forEach(sunscription => sunscription.unsubscribe())
  }
}
