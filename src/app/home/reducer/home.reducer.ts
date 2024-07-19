import { Action, createReducer, on } from '@ngrx/store';
import { CounterType, Decrement, Increment, Reset } from './home.action';

export const initialState = 0;

export const CounterReducer = createReducer(
  initialState,
  on(Increment, (state) => state + 1),
  on(Decrement, (state) => state - 1),
  on(Reset, (state) => 0)
);
