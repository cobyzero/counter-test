import { Action } from '@ngrx/store';

export enum CounterType {
  Increment = '[Home Component] Increment',
  Decrement = '[Home Component] Decrement',

  Reset = '[Home Component] Reset',
}

export class IncrementAction implements Action {
  readonly type = CounterType.Increment;
}

export class DecrementAction implements Action {
  readonly type = CounterType.Decrement;
}

export class ResetAction implements Action {
  readonly type = CounterType.Reset;
}
