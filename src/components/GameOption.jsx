import React, { useEffect, useState } from "react";
import "./GameOption.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const GameOption = ({ optionImage, matchColor }) => {
  const [ImagePicked, setImagePicked] = useState("NA");
  const [handleColor, setHandleColor] = useState("");
  useEffect(() => {
    const gameOptionChose = () => {
      switch (optionImage) {
        case "paper":
          setImagePicked(paperImage);
          setHandleColor("paper-option");
          break;
        case "rock":
          setImagePicked(rockImage);
          setHandleColor("rock-option");
          break;
        case "scissors":
          setImagePicked(scissorsImage);
          setHandleColor("scissors-option");
          break;
        default:
          setImagePicked(paperImage);
          setHandleColor("paper-option");
      }
      if (matchColor) {
        switch (handleColor) {
          case "paper-option":
            matchColor("paper-option");
            console.log("paper-option");
            break;
          case "rock-option":
            matchColor("rock-option");
            console.log("rock-option");

            break;
          case "scissors-option":
            matchColor("scissors-option");
            console.log("scissors-option");

            break;
          default:
            matchColor("paper-option");
            console.log(ImagePicked, "Nothing");
        }
      }
    };
    gameOptionChose();
  }, [optionImage, matchColor]);

  return (
    <div className="game-option">
      <img src={ImagePicked} alt="image-picked" />
    </div>
  );
};

export default GameOption;
