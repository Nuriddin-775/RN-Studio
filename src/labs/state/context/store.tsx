/**
 * Context API Store
 * Demonstrates React Context for state management
 */
import { createContext, useContext, useReducer, ReactNode } from "react";

// State type
interface CounterState {
  count: number;
  history: number[];
}

// Action types
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "INCREMENT_BY"; payload: number }
  | { type: "RESET" };

// Initial state
const initialState: CounterState = {
  count: 0,
  history: [],
};

// Reducer
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case "INCREMENT_BY":
      return {
        count: state.count + action.payload,
        history: [...state.history, state.count + action.payload],
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// Context
interface CounterContextType {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Provider
interface CounterProviderProps {
  children: ReactNode;
}

export function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Hook
export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}

// Action creators (optional helpers)
export const counterActions = {
  increment: (): CounterAction => ({ type: "INCREMENT" }),
  decrement: (): CounterAction => ({ type: "DECREMENT" }),
  incrementBy: (amount: number): CounterAction => ({
    type: "INCREMENT_BY",
    payload: amount,
  }),
  reset: (): CounterAction => ({ type: "RESET" }),
};

