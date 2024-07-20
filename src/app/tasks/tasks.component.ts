import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { AddTaskAction, DeleteTaskAction } from './reducer/task.action';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks$: Observable<Array<TaskModel>>;
  constructor(private store: Store<{ tasks: Array<TaskModel> }>) {
    this.tasks$ = store.pipe(select('tasks'));
  }

  addTask() {
    this.store.dispatch(new AddTaskAction());
  }

  deleteTask() {
    this.store.dispatch(new DeleteTaskAction());
  }
}
