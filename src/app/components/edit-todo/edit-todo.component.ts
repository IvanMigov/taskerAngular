import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import {Todo} from '../../shared/todo.model';
import { TodosService } from '../../shared/todos.service';



@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit, OnDestroy {
  todo: Todo;
  formClass = 'td-edit';
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private todosService: TodosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.todosService.setCurrentTodoId(+params['id']);
          this.todo = this.todosService.getCurrentTodo();
        }
      );
    this.subscription = this.todosService.currentTodoChanged
      .subscribe(
        (todo: Todo) => {
          this.todo = todo;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
