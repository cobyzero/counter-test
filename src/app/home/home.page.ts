import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecrementAction, IncrementAction, ResetAction } from './reducer/home.action';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }
}
