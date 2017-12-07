import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos/0', redirectTo: '/todos', pathMatch: 'full' },
  {
    path: 'todos', component: ContentMainComponent,children: [
      {path: ':id', component: EditTodoComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
