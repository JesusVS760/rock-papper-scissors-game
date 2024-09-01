import React, { useEffect, useState } from "react";
import "./GameOption.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const GameOption = ({ optionImage }) => {
  const [ImagePicked, setImagePicked] = useState("NA");
  useEffect(() => {
    const gameOptionChose = () => {
      switch (optionImage) {
        case "paper":
          setImagePicked(paperImage);
          break;
        case "rock":
          setImagePicked(rockImage);
          break;
        case "scissors":
          setImagePicked(scissorsImage);
          break;
        default:
          setImagePicked(paperImage);
      }
    };
    gameOptionChose();
  }, [optionImage]);

  return (
    <div className="game-option">
      <img src={ImagePicked} alt="" />
    </div>
  );
};

export default GameOption;
