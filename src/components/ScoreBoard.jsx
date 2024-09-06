import React, { useEffect, useState } from "react";
import "./ScoreBoard.css";
import logo from "../images/logo.svg";
const ScoreBoard = ({ getCurrentScore }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // getCurrentScore(score);
  }, []);

  return (
    <div className="score-board-container">
      <div className="score-board-title">
        <img src={logo} alt="" />
      </div>
      <div className="score-board-score">
        <h2>score</h2>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
