import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TodoItemLongComponent } from './components/todo-item-long/todo-item-long.component';
import { TodosService } from './shared/todos.service';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { AppRoutingModule } from './app-routing.module';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    LeftSideBarComponent,
    FiltersComponent,
    TodoItemLongComponent,
    ContentMainComponent,
    EditTodoComponent,
    TodoFormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
