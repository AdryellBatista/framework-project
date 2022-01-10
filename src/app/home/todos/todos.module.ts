import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { ToDosService } from 'src/app/shared/services/todos.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatCheckboxModule
  ],
  providers: [
    ToDosService
  ]
})
export class TodosModule { }
