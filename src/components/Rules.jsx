import React, { useState } from "react";
const Rules = ({ handleRules }) => {
  const [InfoPage, setInfoPage] = useState(false);

  const handleInfoPage = () => {
    handleRules(!InfoPage);
  };

  return (
    <div className="rules-container">
      <div className="rules-button">
        <button onClick={handleInfoPage}>RULES</button>
      </div>
    </div>
  );
};

export default Rules;
