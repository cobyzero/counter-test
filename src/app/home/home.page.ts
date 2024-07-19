import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset } from './reducer/home.action';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(Increment());
  }

  decrement() {
    this.store.dispatch(Decrement());
  }

  reset() {
    this.store.dispatch(Reset());
  }
}
