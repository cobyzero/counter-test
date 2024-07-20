import { createReducer, on } from '@ngrx/store';
import { SaveAction } from './home.action';

export const initialState: number = 0;

export const SyncReducer = createReducer(
  initialState,
  on(SaveAction, (_, action) => {
    return action.time;
  })
);
