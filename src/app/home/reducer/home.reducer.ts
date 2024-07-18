import { Action } from '@ngrx/store';
import { CounterType } from './home.action';

export const initialState = 0;
export function CounterFun(state = initialState, action: Action) {
  switch (action.type) {
    case CounterType.Decrement:
      return (state = state - 1);
    case CounterType.Increment:
      return (state = state + 1);
    case CounterType.Reset:
      return (state = 0);
    default:
      return state;
  }
}
