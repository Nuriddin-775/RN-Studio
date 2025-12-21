/**
 * Redux Store Configuration
 * App-level Redux store setup
 */
import counterReducer from "@labs/state/redux/slice"
import {configureStore} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
