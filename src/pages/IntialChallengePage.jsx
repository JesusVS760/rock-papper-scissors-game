import React, { useEffect, useState } from "react";
import "./InitialChallengePage.css";
import ScoreBoard from "../components/ScoreBoard";
import { useParams } from "react-router-dom";
import GameOption from "../components/GameOption";
import HousePicked from "../components/HousePicked";
const IntialChallengePage = () => {
  const { gameChoice } = useParams();

  const [foundPlayerBorder, setFoundPlayerBorder] = useState("");
  const [foundHouseBorder, setFoundHouseBorder] = useState("");

  const handleMatchColor = (playerColor) => {
    setFoundPlayerBorder(playerColor);
  };

  const handleHouseMatchColor = (houseColor) => {
    console.log("received", houseColor);
    setFoundHouseBorder(houseColor);
  };

  return (
    <div className="initial-challenge-container">
      <div className="score-board">
        <ScoreBoard />
      </div>
      <div className="game-content">
        <div className="picked-container">
          <h2>YOU PICKED</h2>
          <div className={foundPlayerBorder}>
            <GameOption
              optionImage={gameChoice}
              matchColor={handleMatchColor}
            />
          </div>
        </div>
        <div className="house-container">
          <h2>THE HOUSE PICKED</h2>
          <div className={foundHouseBorder}>
            <HousePicked min={1} max={3} matchColor={handleHouseMatchColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntialChallengePage;
