import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}

}
