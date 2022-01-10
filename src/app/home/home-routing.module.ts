import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "posts",
        loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
      },
      {
        path: "albums",
        loadChildren: () => import('./albums/albums.module').then((m) => m.AlbumsModule)
      },
      {
        path: "todos",
        loadChildren: () => import('./todos/todos.module').then((m) => m.TodosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
