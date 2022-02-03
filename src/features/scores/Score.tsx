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

  const onClick = (i: number) => {
    if (playerScoreArray.length < 10) {
      dispatch(increaseScoreByAmount(i + 1));
      updatePlayerScoreArray((playerScoreArray) => [
        ...playerScoreArray,
        i + 1,
      ]);
    }
  };

  return (
    <>
      <div className="py-5">
        {[...Array(10)].map((e: number, i: number) => {
          return (
            <Button onClick={() => onClick(i)} variant="outlined" key={i + 1}>
              {i + 1}
            </Button>
          );
        })}
      </div>
      <Scoreboard playerScore={playerScoreArray} totalScore={count} />
    </>
  );
};
