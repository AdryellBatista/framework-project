import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  arPosts: Post[];
  displayedColumns: string[] = ['id', 'title', 'userId', 'actions'];
  arUsers: any[] = [];
  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      data => {
        this.arUsers = data;
      }
    );
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      data => {
        this.arPosts = data;
      }
    );
  }

  searchAuthor(post: Post) {
    const author = this.arUsers.filter( element => element.id === post.userId);
    if (author.length > 0) {
      return author[0];
    }

    return null;
  }
}
