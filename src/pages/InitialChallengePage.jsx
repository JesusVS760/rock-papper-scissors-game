import React, { useEffect, useState } from "react";
import "./InitialChallengePage.css";
import ScoreBoard from "../components/ScoreBoard";
import { useLocation, useParams } from "react-router-dom";
import GameOption from "../components/GameOption";
import HousePicked from "../components/HousePicked";
import Result from "../components/Result";

const InitialChallengePage = () => {
  const { gameChoice } = useParams();
  const [foundPlayerBorder, setFoundPlayerBorder] = useState("");
  const [foundHouseBorder, setFoundHouseBorder] = useState("");
  const [sendScore, setSendScore] = useState(0); // This represents the total score
  const [currentScore, setCurrentScore] = useState(0); // Used to track temporary score for this round

  const location = useLocation();

  useEffect(() => {
    console.log("Current score state: ", location.state?.score);
    if (location.state?.score) {
      const mappedScore = location.state?.score;
      console.log(mappedScore);
      setSendScore(mappedScore); // Initialize the sendScore with the score from location state
      console.log("Initial score: ", mappedScore);
    } else {
      console.log("Score not found in location state");
    }
  }, [location.state?.score]);

  const handleMatchColor = (playerColor) => {
    setFoundPlayerBorder(playerColor);
  };

  const handleHouseMatchColor = (houseColor) => {
    setFoundHouseBorder(houseColor);
  };

  // Update the score based on win/loss
  const getUpdatedScore = (score) => {
    setSendScore((prevScore) => prevScore + (score === 1 ? 1 : -1));
  };

  // Log the updated score whenever it changes
  useEffect(() => {
    console.log("Updated sendScore:", sendScore);
  }, [sendScore]);

  return (
    <div className="initial-challenge-container">
      <div className="score-board">
        <ScoreBoard
          updatedScore={sendScore}
          getCurrentScore={setCurrentScore}
        />
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
        {foundHouseBorder && (
          <div className="result-content">
            <Result
              result={gameChoice}
              houseResult={foundHouseBorder}
              getScore={getUpdatedScore}
              sentCurrent={currentScore}
              newScore={sendScore}
            />
          </div>
        )}

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

export default InitialChallengePage;
