import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../shared/todos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }
  showModalDialog(){
    this.todosService.showModalDialog();
  }

}
