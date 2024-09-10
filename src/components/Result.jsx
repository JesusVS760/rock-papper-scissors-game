import React, { useEffect, useState } from "react";
import "./Result.css";
import PlayAgain from "./PlayAgain";

const Result = (result) => {
  const rs = result;
  // console.log("Received Prop Value: ", rs);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    let handleResult = () => {
      if (rs.result === "paper" && rs.houseResult === "rock-option") {
        setIsWin(true);
      } else if (rs.result === "rock" && rs.houseResult === "scissors-option") {
        setIsWin(true);
      } else if (
        rs.result === "scissors" &&
        rs.houseResult === "paper-option"
      ) {
        setIsWin(true);
      } else {
        setIsWin(false);
      }
    };
    handleResult();
    // console.log("Before Entering", rs.sentCurrent);
    if (rs.sentCurrent >= 0) {
      // console.log("Entered");
      handleUpdatedScore(isWin);
    }
  }, [result]);

  function handleUpdatedScore(update) {
    if (update) {
      console.log("sent value", 1);
      rs.getScore(1);
    } else {
      // console.log("sent value", -1);
      rs.getScore(-1);
    }
  }
  return (
    <div className="result-container">
      <h1>{isWin ? "YOU WIN" : "YOU LOSE"}</h1>
      <PlayAgain retreivedScore={rs.newScore} />
    </div>
  );
};

export default Result;
