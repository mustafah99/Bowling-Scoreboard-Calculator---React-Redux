import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { increaseScoreByAmount } from "./scoreSlice";
import { Scoreboard } from "../../components/Game/scoreboard";
import { useState } from "react";

interface AddScorePoints {
  addScorePoints: { scores: number[] };
}

export const AddScore = () => {
  const count = useAppSelector((state) => state.scores.value);
  const maxPossible = useAppSelector((state) => state.scores.maxPossible);
  const dispatch = useAppDispatch();
  const [data, setScoreData] = useState<AddScorePoints | any>([null]);
  const [playerScoreArray, updatePlayerScoreArray] = useState<number[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/addScorePoints")
      .then((res: Response) => res.json())
      .then((data: AddScorePoints) => setScoreData(data.addScorePoints));
  }, []);

  const onClick = (score: number) => {
    if (playerScoreArray.length < 10) {
      dispatch(increaseScoreByAmount(score));
      updatePlayerScoreArray((playerScoreArray) => [
        ...playerScoreArray,
        score,
      ]);
    }
  };

  return (
    <>
      <div className="py-5">
        {[...data].map((_e: number, score: number) => {
          return (
            <Button
              onClick={() => onClick(score)}
              variant="outlined"
              key={score}
            >
              {score}
            </Button>
          );
        })}
      </div>
      <Scoreboard
        playerScore={playerScoreArray}
        totalScore={count}
        maxPossible={maxPossible}
      />
    </>
  );
};
