import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsService } from 'src/app/shared/services/albums.service';
import { MatIconModule } from '@angular/material/icon';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumPhotosComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatIconModule
  ],
  providers: [
    AlbumsService
  ]
})
export class AlbumsModule { }
