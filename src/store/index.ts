import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./allReducer";

export const store = configureStore({
    reducer: allReducer
})

export type AppDispatch = typeof store.dispatch
export type TypeRootState = ReturnType<typeof store.getState>