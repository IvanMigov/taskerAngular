import {Component, OnInit, Input} from '@angular/core';
import {Todo} from '../../shared/todo.model';

@Component({
  selector: 'app-todo-item-long',
  templateUrl: './todo-item-long.component.html',
  styleUrls: ['./todo-item-long.component.css']
})
export class TodoItemLongComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }
  getImagePriority(){
    return "./src/images/status/normal.png"
  }
  getColorStatus(status){
    let backgroundColor = '#bfe4ff';
    switch (status) {
      case  'InProgress':
        backgroundColor = '#0c0e75';
        break;
      case  'Closed':
        backgroundColor = '#1d750c';
        break;
      default:
        backgroundColor = '#bfe4ff';
    }

    return backgroundColor
  }

}
