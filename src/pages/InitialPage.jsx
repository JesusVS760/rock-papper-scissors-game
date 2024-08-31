import React, { useEffect, useState } from "react";
import ScoreBoard from "../components/ScoreBoard";
import "./initialPage.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";
import Rules from "../components/Rules";
import rulesImage from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
const initialPage = () => {
  const [displayRules, setDisplayRules] = useState(false);

  //callback function
  const handleRules = (show) => {
    setDisplayRules(show);
    console.log(show);
  };

  return (
    <div className="initial-page-container">
      <div className="score-board-heading">
        <ScoreBoard />
      </div>
      <div className="player-options">
        <div className="paper-option">
          <img src={paperImage} alt="paper" />
        </div>
        <div className="scissors-option">
          <img src={scissorsImage} alt="scissors image" />
        </div>
        <div className="rock-option">
          <img src={rockImage} alt="rock image" />
        </div>
      </div>
      <div className="rules-button">
        <Rules handleRules={handleRules} />
      </div>
      {displayRules && (
        <div className="active-rules-page">
          <div className="rules-heading">
            <h1>RULES</h1>
            <img src={closeIcon} alt="close icon" />
          </div>
          <img className="rules-image" src={rulesImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default initialPage;
