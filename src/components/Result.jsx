import React, { useEffect, useState } from "react";

const Result = (result, { getScore, sentCurrent }) => {
  const rs = result;
  console.log("Received Result", rs);
  const [isWin, setIsWin] = useState(false);
  // console.log(getScore);
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
    console.log("Before Entering", sentCurrent);
    if (sentCurrent >= 0) {
      console.log("Entered");
      handleUpdatedScore(isWin);
    }
  }, [result]);

  function handleUpdatedScore(update) {
    console.log("before");

    if (update) {
      getScore(1);
      console.log("value", 1);
    } else {
      getScore(-1);
    }
  }

  return (
    <div className="result-container">
      <h1>{isWin ? "YOU WIN" : "YOU LOSE"}</h1>
      <button>Play Again</button>
    </div>
  );
};

export default Result;
