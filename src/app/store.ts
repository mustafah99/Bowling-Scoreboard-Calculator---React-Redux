import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/scores/scoreSlice";

export const store = configureStore({
  reducer: {
    scores: scoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
