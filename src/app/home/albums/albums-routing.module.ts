import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

const routes: Routes = [
  {
    path: "",
    component: AlbumsComponent
  },
  {
    path: ":id",
    component: AlbumPhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
