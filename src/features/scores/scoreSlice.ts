import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ScoreState {
  value: number;
  maxPossible: number;
}

const initialState: ScoreState = {
  value: 0,
  maxPossible: 300,
};

export const scoreSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseScoreByAmount: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 2:
          state.maxPossible -= 28;
          break;
        case 4:
          state.maxPossible -= 26;
          break;
        case 6:
          state.maxPossible -= 24;
          break;
        case 8:
          state.maxPossible -= 22;
          break;
        case 10:
          state.value += 30;
          break;
        default:
          state.value += action.payload;
          state.maxPossible -= 10;
      }
    },
  },
});

export const { increaseScoreByAmount } = scoreSlice.actions;

export const selectScore = (state: RootState) => state.scores.value;

export default scoreSlice.reducer;
