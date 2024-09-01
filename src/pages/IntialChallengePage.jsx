import React, { useEffect } from "react";
import "./InitialChallengePage.css";
import ScoreBoard from "../components/ScoreBoard";
import { useParams } from "react-router-dom";
import GameOption from "../components/GameOption";
const IntialChallengePage = () => {
  const { gameChoice } = useParams();

  useEffect(() => {
    try {
      if (gameChoice !== "") {
        // console.log("Choice:", gameChoice);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [gameChoice]);

  return (
    <div className="initial-challenge-container">
      <div className="score-board">
        <ScoreBoard />
      </div>
      <div className="game-content">
        <div className="you-picked">
          <GameOption optionImage={gameChoice} />
        </div>
        <div className="house-picked"></div>
      </div>
    </div>
  );
};

export default IntialChallengePage;
