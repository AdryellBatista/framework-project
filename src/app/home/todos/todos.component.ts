import { Component, OnInit } from '@angular/core';
import { ToDosService } from 'src/app/shared/services/todos.service';
import { ToDo } from 'src/app/shared/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  arTodos: ToDo[] = [];
  constructor(private toDosService: ToDosService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.toDosService.getTodos().subscribe(
      data => {
        this.arTodos = data;
      }
    );
  }
}
