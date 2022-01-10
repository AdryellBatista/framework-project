import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    PostsService,
    UsersService
  ]
})
export class PostsModule { }
