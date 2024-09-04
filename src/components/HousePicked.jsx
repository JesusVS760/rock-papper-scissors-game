import React, { useEffect, useState } from "react";
import "./HousePicked.css";
import paperImage from "../images/icon-paper.svg";
import rockImage from "../images/icon-rock.svg";
import scissorsImage from "../images/icon-scissors.svg";

const HousePicked = ({ min, max, matchColor }) => {
  const [pickedPlayerImage, setPickedPlayerImage] = useState("Loading");
  const [isDone, setIsDone] = useState(false);

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
          setPickedPlayerImage(paperImage);
          if (matchColor) {
            matchColor("paper-option");
            console.log("paper-option");
          }
          return;
        case 2:
          setPickedPlayerImage(rockImage);
          if (matchColor) {
            matchColor("rock-option");
            console.log("rock-option");
          }
          return;
        case 3:
          setPickedPlayerImage(scissorsImage);
          if (matchColor) {
            matchColor("scissors-option");
            console.log("scissors-option");
          }
          return;
        default:
          return setPickedPlayerImage("Loading");
      }
    };
    setTimeout(() => {
      houseContent();
      setIsDone(true);
    }, 2000);
  }, []);

  return (
    <div className="house-picked-container">
      {isDone ? (
        <img src={pickedPlayerImage} alt="Loading" />
      ) : (
        <h1 className="loading">Loading</h1>
      )}
    </div>
  );
};

export default HousePicked;
