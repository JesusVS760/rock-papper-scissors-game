import React, { useEffect, useState } from "react";
import "./Result.css";
import PlayAgain from "./PlayAgain";

const Result = ({ result, houseResult, getScore, sentCurrent, newScore }) => {
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const handleResult = () => {
      if (result === "paper" && houseResult === "rock-option") {
        setIsWin(true);
      } else if (result === "rock" && houseResult === "scissors-option") {
        setIsWin(true);
      } else if (result === "scissors" && houseResult === "paper-option") {
        setIsWin(true);
      } else {
        setIsWin(false);
      }
    };

    handleResult();
  }, [result, houseResult]);

  useEffect(() => {
    if (sentCurrent >= 0) {
      handleUpdatedScore(isWin);
    }
  }, [isWin, sentCurrent]);

  const handleUpdatedScore = (win) => {
    getScore(win ? 1 : 0);
  };

  return (
    <div className="result-container">
      <h1>{isWin ? "YOU WIN" : "YOU LOSE"}</h1>
      <PlayAgain retreivedScore={newScore} />
    </div>
  );
};

export default Result;
