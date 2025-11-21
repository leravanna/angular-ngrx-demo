import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterValue } from '../counter/state/counter.selectors';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter-details',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter-details.html',
  styleUrl: './counter-details.css',
})
export class CounterDetails {
  private store = inject(Store);

  value$ = this.store.select(selectCounterValue);
}
