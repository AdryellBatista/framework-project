import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]>  {
    return this.http.get<ToDo[]>(`${environment.URL_API}/todos`).pipe(
      map((data) => data)
    );
  }

}
