import { Component, OnInit } from '@angular/core';

import {Todo} from '../../shared/todo.model';
import {TodosService} from "../../shared/todos.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  todo: Todo;
  formClass = 'td-new';
  showModal = false;
  subscription: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todo = new Todo();
    this.showModal = this.todosService.getModalDialogState();
    this.subscription = this.todosService.showModalChanged
      .subscribe(
        (show: boolean) => {
          if(show){
            this.todo = new Todo();
          }
          this.showModal = show;
        }
      );
  }

  onSaveTodo(todoData) {
    console.log('Save new todo',todoData);
    this.todosService.saveNewToDo({...this.todo, ...todoData});
    this.todosService.hideModalDialog();

  }
  onCloseTodo() {
    this.todosService.hideModalDialog();
    console.log('Close new todo');

  }


}
