/**
 * Zustand Counter Store
 * Demonstrates Zustand's simple hook-based API
 */
import { create } from "zustand";

interface CounterStore {
  count: number;
  history: number[];
  increment: () => void;
  decrement: () => void;
  incrementBy: (amount: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  history: [],

  increment: () =>
    set((state) => ({
      count: state.count + 1,
      history: [...state.history, state.count + 1],
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
      history: [...state.history, state.count - 1],
    })),

  incrementBy: (amount) =>
    set((state) => ({
      count: state.count + amount,
      history: [...state.history, state.count + amount],
    })),

  reset: () => set({ count: 0, history: [] }),
}));

