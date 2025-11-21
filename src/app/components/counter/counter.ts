import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions } from './state/counter.actions';
import { selectCounterValue } from './state/counter.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  private store = inject(Store);
  inputValue = 0;
  value$ = this.store.select(selectCounterValue);

  constructor() {}

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
  setByAmount() {
    const amount = Number(this.inputValue) || 0;
    this.store.dispatch(CounterActions.setByAmount({ amount }));
  }
}
