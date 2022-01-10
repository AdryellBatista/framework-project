import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Album, AlbumPhoto } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>  {
    return this.http.get<Album[]>(`${environment.URL_API}/albums`).pipe(
      map((data) => data)
    );
  }

  getAlbumPhotos(albumId: number): Observable<AlbumPhoto[]>  {
    return this.http.get<AlbumPhoto[]>(`${environment.URL_API}/albums/${albumId}/photos`).pipe(
      map((data) => data)
    );
  }
}
