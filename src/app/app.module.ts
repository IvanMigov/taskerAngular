import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TodoItemLongComponent } from './components/todo-item-long/todo-item-long.component';
import { TodosService } from './shared/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    LeftSideBarComponent,
    FiltersComponent,
    TodoItemLongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
