import React, { useEffect, useState } from "react";
import ScoreBoard from "../components/ScoreBoard";
import "./initialPage.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";
import Rules from "../components/Rules";
import rulesImage from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import { useNavigate } from "react-router-dom";
import GameOption from "../components/GameOption";

const initialPage = () => {
  const [displayRules, setDisplayRules] = useState(false);
  const navigate = useNavigate();
  //callback function
  const handleRules = (show) => {
    setDisplayRules(show);
    console.log(show);
  };
  // callback function
  const handleCloseRules = (close) => {
    setDisplayRules(!close);
  };
  const handleNextPage = (choice) => {
    navigate(`/${choice}`);
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
        <ScoreBoard />
      </div>
      <div className="player-options">
        <div className="paper-option">
          <GameOption
            optionImage={"paperImage"}
            onClick={() => handleNextPage("paper")}
          />
        </div>
        <div className="scissors-option">
          <GameOption
            optionImage={"scissorsImage"}
            onClick={() => handleNextPage("scissors")}
          />
        </div>
        <div className="rock-option">
          <GameOption
            optionImage={"rockImage"}
            onClick={() => handleNextPage("rock")}
          />
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
