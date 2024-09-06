import React, { useEffect, useState } from "react";

const Result = ({ results, getScore, sendCurrent }) => {
  const [isWin, setIsWin] = useState(false);
  console.log(results);
  useEffect(() => {
    let handleResult = () => {
      if (
        results.playerResult === "paper" &&
        results.houseResult === "rock-option"
      ) {
        setIsWin(true);
      } else if (
        results.playerResult === "rock" &&
        results.houseResult === "scissors-option"
      ) {
        setIsWin(true);
      } else if (
        results.playerResult === "scissors" &&
        results.houseResult === "paper-option"
      ) {
        setIsWin(true);
      } else {
        setIsWin(false);
      }
    };
    handleResult();
    if (getScore) {
      handleUpdatedScore(isWin);
    }
  }, [results]);
  //test
  function handleUpdatedScore(update) {
    // if (update == true) {
    getScore(sendCurrent + 1);
    console.log("value", sendCurrent);
    // } else {
    //   getScore(sendCurrent - 1);
    // }
  }

  return (
    <div className="result-container">
      <h1>{isWin ? "YOU WIN" : "YOU LOSE"}</h1>
      <button>Play Again</button>
    </div>
  );
};

export default Result;
