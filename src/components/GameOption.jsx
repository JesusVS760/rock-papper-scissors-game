import React, { useEffect, useState } from "react";
import "./GameOption.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const GameOption = ({ optionImage, matchColor }) => {
  const [ImagePicked, setImagePicked] = useState("");
  const [handleColor, setHandleColor] = useState("");

  useEffect(() => {
    const optionsMap = {
      paper: { image: paperImage, color: "paper-option" },
      rock: { image: rockImage, color: "rock-option" },
      scissors: { image: scissorsImage, color: "scissors-option" },
    };

    const { image, color } = optionsMap[optionImage] || optionsMap.paper;
    setImagePicked(image);
    setHandleColor(color);

    if (matchColor) {
      matchColor(color);
    }
  }, [optionImage, matchColor]);

  return (
    <div className="game-option">
      <img src={ImagePicked} alt="image-picked" />
    </div>
  );
};

export default GameOption;
