import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseScoreByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increaseScoreByAmount } = scoreSlice.actions;

export const selectScore = (state: RootState) => state.scores.value;

export default scoreSlice.reducer;
