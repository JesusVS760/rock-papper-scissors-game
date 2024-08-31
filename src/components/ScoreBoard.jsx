import React, { useState } from "react";
import "./ScoreBoard.css";
const ScoreBoard = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="score-board-container">
      <div className="score-board-title">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score-board-score">
        <h2>score</h2>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
