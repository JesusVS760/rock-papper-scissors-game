import React, { useState } from "react";
import { useActionData } from "react-router-dom";

const Result = (playerResult, HouseResult) => {
  const [isWin, setisWin] = useState(() => console.log(playerResult));
  return (
    <div className="result-container">
      <h1>{isWin ? "YOU WIN" : "YOU LOSE"}</h1>
      <button>Play Again</button>
    </div>
  );
};

export default Result;
