import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css'],
  host: {'class': 'td-content-main'}
})
export class ContentMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
