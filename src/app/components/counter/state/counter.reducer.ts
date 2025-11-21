import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    value: state.value + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    value: state.value - 1,
  })),
  on(CounterActions.reset, () => ({
    ...initialState,
  })),
  on(CounterActions.setByAmount, (state, { amount }) => ({
    ...state,
    value: amount,
  }))
);
