import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {Todo} from '../../shared/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo: Todo;
  @Input() formClass: string;
  todoForm: FormGroup;
  statusList = ['ToDo', 'InProgress', 'Closed'];
  priorityList = ['low', 'normal', 'high'];

  constructor() { }
  private initForm() {
    this.todoForm = new FormGroup({
      'label': new FormControl(this.todo.label),
      'status': new FormControl(this.todo.status),
      'priority': new FormControl(this.todo.priority),
      'title': new FormControl(this.todo.title, Validators.required),
      'description': new FormControl(this.todo.description)
    });
  }
  ngOnInit() {
    this.initForm();
  }
  ngOnChanges() {
    this.initForm();
  }
  onSubmit() {

    console.log(this.todoForm);
  }

}
