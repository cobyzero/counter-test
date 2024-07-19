import { Action } from '@ngrx/store';

export enum TaskType {
  AddTask = '[Task Component] AddTask',
  DeleteTask = '[Task Component] DeleteTask',
}

export class AddTaskAction implements Action {
  readonly type = TaskType.AddTask;
}
export class DeleteTaskAction implements Action {
  readonly type = TaskType.DeleteTask;
}
