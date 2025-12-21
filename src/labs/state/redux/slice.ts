/**
 * Redux Counter Slice
 * Demonstrates Redux Toolkit patterns
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State type
interface CounterState {
  value: number;
  history: number[];
}

// Initial state
const initialState: CounterState = {
  value: 0,
  history: [],
};

// Create slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(state.value);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.history.push(state.value);
    },
    reset: (state) => {
      state.value = 0;
      state.history = [];
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// Export selectors
export const selectCount = (state: { counter: CounterState }) =>
  state.counter.value;
export const selectHistory = (state: { counter: CounterState }) =>
  state.counter.history;

// Export reducer
export default counterSlice.reducer;

