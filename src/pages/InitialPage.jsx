import React, { useEffect, useState } from "react";
import ScoreBoard from "../components/ScoreBoard";
import "./initialPage.css";
import Rules from "../components/Rules";
import rulesImage from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import { useNavigate } from "react-router-dom";
import GameOption from "../components/GameOption";
import { useLocation } from "react-router-dom";

const initialPage = () => {
  const [displayRules, setDisplayRules] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const retrievedScore = location.state?.score;

  //callback function
  const handleRules = (show) => {
    setDisplayRules(show);
    // console.log(show);
  };
  // callback function
  const handleCloseRules = (close) => {
    setDisplayRules(!close);
  };
  const handleNextPage = (choice) => {
    navigate(`/${choice}`, { state: { score: retrievedScore } });
  };

  const handlePrevScore = (retreivedScore) => {
    console.log(retreivedScore);
  };

  return (
    <div
      className={
        displayRules
          ? "initial-page-container-opacity"
          : "initial-page-container"
      }
    >
      <div className="score-board-heading">
        <ScoreBoard prevScore={retrievedScore} />
      </div>
      <div className="player-options">
        <div className="paper-option" onClick={() => handleNextPage("paper")}>
          <GameOption optionImage={"paper"} />
        </div>
        <div
          className="scissors-option"
          onClick={() => handleNextPage("scissors")}
        >
          <GameOption optionImage={"scissors"} />
        </div>
        <div className="rock-option" onClick={() => handleNextPage("rock")}>
          <GameOption optionImage={"rock"} />
        </div>
      </div>
      <div className="rules-button">
        <Rules handleRules={handleRules} closeRules={handleCloseRules} />
      </div>
      {displayRules && (
        <div className="active-rules-page">
          <div className="rules-heading">
            <h1>RULES</h1>
            <img onClick={handleCloseRules} src={closeIcon} alt="close icon" />
          </div>
          <img className="rules-image" src={rulesImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default initialPage;
