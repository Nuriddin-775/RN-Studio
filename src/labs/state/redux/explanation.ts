/**
 * Redux Toolkit Explanation
 * Educational content for the Redux lab
 */

export const explanation = {
  title: "Redux Toolkit",
  subtitle: "The official, opinionated toolset for Redux",

  overview: `
Redux Toolkit is the official recommended approach for writing Redux logic. 
It provides utilities to simplify common Redux use cases, including store setup, 
creating reducers and actions, and handling immutable updates.
  `.trim(),

  keyPoints: [
    {
      title: "createSlice",
      description: "Combines reducers, actions, and selectors in one place",
      icon: "layers",
    },
    {
      title: "Immer Integration",
      description: "Write 'mutating' code that becomes immutable updates",
      icon: "zap",
    },
    {
      title: "DevTools",
      description: "Built-in support for Redux DevTools time-travel debugging",
      icon: "tool",
    },
    {
      title: "TypeScript",
      description: "Excellent TypeScript support out of the box",
      icon: "code",
    },
  ],

  codeExamples: {
    slice: `// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Immer makes this safe!
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`,

    store: `// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,

    hooks: `// hooks.ts - Typed hooks
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`,

    usage: `// Component usage
function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Button onPress={() => dispatch(increment())} title={count.toString()} />
  );
}`,
  },

  pros: [
    "Industry standard for large React apps",
    "Excellent DevTools with time-travel debugging",
    "Predictable state container",
    "Massive ecosystem and middleware support",
    "Great TypeScript integration",
  ],

  cons: [
    "More boilerplate than simpler solutions",
    "Steeper learning curve for beginners",
    "Can be overkill for small apps",
    "Requires Provider wrapper",
  ],

  whenToUse: [
    "Large applications with complex state",
    "Teams that need standardized patterns",
    "When debugging with time-travel is important",
    "Apps with complex async workflows",
  ],

  whenNotToUse: [
    "Simple apps with minimal state",
    "When bundle size is critical (~40KB)",
    "Rapid prototyping",
    "When simpler solutions suffice",
  ],

  bundleSize: "~40KB (minified)",

  comparison: {
    vsContext: "More powerful but more boilerplate. Better for complex state.",
    vsZustand: "More features and DevTools, but Zustand is simpler and smaller.",
  },
};

export type Explanation = typeof explanation;

