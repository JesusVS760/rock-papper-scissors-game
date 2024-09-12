import React, { useEffect, useState } from "react";
import "./ScoreBoard.css";
import logo from "../images/logo.svg";

const ScoreBoard = ({ getCurrentScore, updatedScore, prevScore }) => {
  const [score, setScore] = useState(prevScore || 0);

  useEffect(() => {
    // Check if updatedScore is passed and different from the current score
    if (updatedScore !== undefined && updatedScore !== score) {
      setScore(updatedScore);
      getCurrentScore(updatedScore);
    }
  }, [updatedScore, score, getCurrentScore]);

  useEffect(() => {
    // Set the score to prevScore only if prevScore is defined
    if (prevScore !== undefined) {
      setScore(prevScore);
    }
  }, [prevScore]);

  return (
    <div className="score-board-container">
      <div className="score-board-title">
        <img src={logo} alt="Game Logo" />
      </div>
      <div className="score-board-score">
        <h2>Score</h2>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
