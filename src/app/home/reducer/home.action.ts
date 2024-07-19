import { Action, createAction } from '@ngrx/store';

export enum CounterType {
  Increment = '[Home Component] Increment',
  Decrement = '[Home Component] Decrement',

  Reset = '[Home Component] Reset',
}

export const Increment = createAction(CounterType.Increment);
export const Decrement = createAction(CounterType.Decrement);
export const Reset = createAction(CounterType.Reset);
