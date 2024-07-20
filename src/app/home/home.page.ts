import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SyncAction } from './reducer/home.action';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sync$: Observable<number | null>;

  constructor(private store: Store<{ sync: number }>) {
    this.sync$ = store.select('sync');
  }

  sync() {
    this.store.dispatch(SyncAction(new Date().getTime()));
  }
}
