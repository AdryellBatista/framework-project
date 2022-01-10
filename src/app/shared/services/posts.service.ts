import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>  {
    return this.http.get<Post[]>(`${environment.URL_API}/posts`).pipe(
      map((data) => data)
    );
  }

  deletePost(post: Post): Observable<Post>  {
    return this.http.delete<Post>(`${environment.URL_API}/posts/${post.id}`).pipe(
      map((data) => data)
    );
  }
}
