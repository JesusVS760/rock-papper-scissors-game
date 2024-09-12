import React, { useEffect, useState } from "react";
import "./InitialChallengePage.css";
import ScoreBoard from "../components/ScoreBoard";
import { useLocation, useParams } from "react-router-dom";
import GameOption from "../components/GameOption";
import HousePicked from "../components/HousePicked";
import Result from "../components/Result";

const IntialChallengePage = () => {
  const { gameChoice } = useParams();
  const [foundPlayerBorder, setFoundPlayerBorder] = useState("");
  const [foundHouseBorder, setFoundHouseBorder] = useState("");
  const [sendScore, setSendScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const location = useLocation();
  useEffect(() => {
    console.log("Current score state: ", location.state?.score);
    if (location.state?.score) {
      const mappedScore = location.state?.score;
      console.log("RESULT: ", mappedScore);
    } else {
      console.log("FAILED");
    }
  }, [location.state?.score]);

  const handleMatchColor = (playerColor) => {
    setFoundPlayerBorder(playerColor);
  };

  const handleHouseMatchColor = (houseColor) => {
    setFoundHouseBorder(houseColor);
  };
  const getUpdatedScore = (score) => {
    console.log("sendScore:", sendScore);

    setSendScore((prevScore) => {
      if (score === 1) {
        return prevScore + 1;
      } else {
        return prevScore - 1;
      }
    });
  };
  const getCurrentScore = (score) => {
    // console.log("before sending", score);
    setCurrentScore(score);
  };

  return (
    <div className="initial-challenge-container">
      <div className="score-board">
        <ScoreBoard
          updatedScore={sendScore}
          getCurrentScore={getCurrentScore}
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
            ></Result>
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

export default IntialChallengePage;
