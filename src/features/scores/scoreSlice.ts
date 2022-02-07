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
        case 1:
          state.value += action.payload;
          state.maxPossible -= 29;
          break;
        case 2:
          state.value += action.payload;
          state.maxPossible -= 28;
          break;
        case 3:
          state.value += action.payload;
          state.maxPossible -= 27;
          break;
        case 4:
          state.value += action.payload;
          state.maxPossible -= 26;
          break;
        case 5:
          state.value += action.payload;
          state.maxPossible -= 25;
          break;
        case 6:
          state.value += action.payload;
          state.maxPossible -= 24;
          break;
        case 7:
          state.value += action.payload;
          state.maxPossible -= 23;
          break;
        case 8:
          state.value += action.payload;
          state.maxPossible -= 22;
          break;
        case 9:
          state.value += action.payload;
          state.maxPossible -= 21;
          break;
        case 10:
          state.value += 30;
          break;
      }
    },
  },
});

export const { increaseScoreByAmount } = scoreSlice.actions;

export const selectScore = (state: RootState) => state.scores.value;

export default scoreSlice.reducer;
