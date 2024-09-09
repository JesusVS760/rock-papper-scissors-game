import React from "react";
import "./PlayAgain.css";
import { useNavigate } from "react-router-dom";

const PlayAgain = ({ retreivedScore }) => {
  const navigate = useNavigate();
  console.log("New Score:", retreivedScore);

  return (
    <div className="play-again-container">
      <button
        onClick={() => navigate("/", { state: { score: retreivedScore } })}
      >
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
