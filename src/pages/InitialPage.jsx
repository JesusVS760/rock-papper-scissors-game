import React from "react";
import ScoreBoard from "../components/ScoreBoard";
import "./initialPage.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const initialPage = () => {
  return (
    <div className="initial-page-container">
      <div className="score-board-heading">
        <ScoreBoard />
      </div>
      <div className="player-options">
        <div className="paper-option">
          <img src={paperImage} alt="paper" />
        </div>
        <div className="rock-option">
          <img src={rockImage} alt="" />
        </div>
        <div className="scissors-option">
          <img src={scissorsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default initialPage;
