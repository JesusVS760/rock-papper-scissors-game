import React, { useEffect, useState } from "react";
import "./HousePicked.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const HousePicked = ({ min, max }) => {
  const [pickedPlayerImage, setPickedPlayerImage] = useState("");

  const getRandomNum = () => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  useEffect(() => {
    const houseContent = () => {
      const pickedValue = getRandomNum();

      switch (pickedValue) {
        case 1:
          return setPickedPlayerImage(paperImage);
        case 2:
          return setPickedPlayerImage(rockImage);
        case 3:
          return setPickedPlayerImage(scissorsImage);
        default:
          return setPickedPlayerImage(paperImage);
      }
    };
    setTimeout(houseContent(), 1000);
  }, []);

  return (
    <div className="house-picked-container">
      <img src={pickedPlayerImage} alt="" />
    </div>
  );
};

export default HousePicked;
