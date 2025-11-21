import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { CounterDetails } from './components/counter-details/counter-details';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: Counter },
  { path: 'details', component: CounterDetails },
];
