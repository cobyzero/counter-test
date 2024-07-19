import { Action } from '@ngrx/store';
import { TaskModel } from 'src/app/models/task.model';
import { TaskType } from './task.action';
import { TasksModule } from '../tasks.module';

export var initialTaskState: Array<TaskModelI> = [];

export class TaskModelI implements TaskModel {
  Title = '';
  Description = '';
}

export function TaskReducer(
  state = initialTaskState,
  action: Action
): Array<TaskModelI> {
  var tak = new TaskModelI();
  tak.Title = 'DASDASD';
  tak.Description = 'dasdasd';

  switch (action.type) {
    case TaskType.AddTask:
      initialTaskState.push(...initialTaskState, tak);
      return initialTaskState;
    case TaskType.DeleteTask:
      return [];
    default:
      return state;
  }
}
