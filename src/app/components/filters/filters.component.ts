import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../shared/todos.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  subscription: Subscription[];
  filters:{};
  filterButtons:{value:string,label:string}[] = [
    {
      value: 'ToDo',
      label: 'To Do'
    },
    {
      value: 'InProgress',
      label: 'In Progress'
    },
    {
      value: 'Closed',
      label: 'Closed'
    }
  ];
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    let filterSubscription = this.todosService.filtersChanged
      .subscribe(
        (filters: {}) => {
          this.filters = filters;
        }
      );
    this.todosService.fetchFiltersSet();
    this.filters = this.todosService.getFiltersSet();
    this.subscription = [filterSubscription]
  }
  ngOnDestroy() {
    this.subscription.forEach(sunscription => sunscription.unsubscribe())
  }
}
