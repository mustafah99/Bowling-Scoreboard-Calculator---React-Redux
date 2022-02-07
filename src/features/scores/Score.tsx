import Button from "@mui/material/Button";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { increaseScoreByAmount } from "./scoreSlice";
import { Scoreboard } from "../../components/Game/scoreboard";
import { useState } from "react";

export const AddScore = () => {
  const count = useAppSelector((state) => state.scores.value);
  const dispatch = useAppDispatch();
  const [playerScoreArray, updatePlayerScoreArray] = useState<number[]>([]);

  const onClick = (score: number) => {
    if (playerScoreArray.length < 10) {
      dispatch(increaseScoreByAmount(score + 1));
      updatePlayerScoreArray((playerScoreArray) => [
        ...playerScoreArray,
        score + 1,
      ]);
    }
  };

  return (
    <>
      <div className="py-5">
        {[...Array(10)].map((_e: number, score: number) => {
          return (
            <Button
              onClick={() => onClick(score)}
              variant="outlined"
              key={score + 1}
            >
              {score + 1}
            </Button>
          );
        })}
      </div>
      <Scoreboard playerScore={playerScoreArray} totalScore={count} />
    </>
  );
};
