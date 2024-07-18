import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
