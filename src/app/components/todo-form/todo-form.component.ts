import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {Todo} from '../../shared/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Input() todo: Todo;
  @Input() formClass: string;
  todoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      'label': new FormControl(this.todo.label, Validators.required),
      'status': new FormControl(this.todo.status, Validators.required),
      'priority': new FormControl(this.todo.priority, Validators.required),
      'title': new FormControl(this.todo.title, Validators.required),
      'description': new FormControl(this.todo.description, Validators.required)
    });
  }
  onSubmit() {

    console.log(this.todoForm);
  }

}
