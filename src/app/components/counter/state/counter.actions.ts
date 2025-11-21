import { createActionGroup, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    Increment: props<any>(),
    Decrement: props<any>(),
    Reset: props<any>(),
    'Set By Amount': props<{ amount: number }>(),
  },
});
