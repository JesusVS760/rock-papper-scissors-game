import React, { useEffect } from "react";
import "./InitialChallengePage.css";
import ScoreBoard from "../components/ScoreBoard";
import { useParams } from "react-router-dom";
import GameOption from "../components/GameOption";
import HousePicked from "../components/HousePicked";
const IntialChallengePage = () => {
  const { gameChoice } = useParams();

  // useEffect(() => {
  //   try {
  //     if (gameChoice !== "") {
  //       // console.log("Choice:", gameChoice);
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // }, [gameChoice]);

  return (
    <div className="initial-challenge-container">
      <div className="score-board">
        <ScoreBoard />
      </div>
      <div className="game-content">
        <div className="picked-container">
          <h2>YOU PICKED</h2>
          <div className="you-picked">
            <GameOption optionImage={gameChoice} />
          </div>
        </div>
        <div className="house-container">
          <h2>THE HOUSE PICKED</h2>
          <div className="house-picked">
            <HousePicked min={1} max={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntialChallengePage;
