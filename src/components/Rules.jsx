import React, { useEffect, useState } from "react";
const Rules = ({ handleRules, closeRules }) => {
  const [InfoPage, setInfoPage] = useState(false);

  const handleInfoPage = () => {
    handleRules(!InfoPage);
  };

  useEffect(() => {
    closeRules(!InfoPage);
  }, []);

  return (
    <div className="rules-container">
      <div className="rules-button">
        <button onClick={handleInfoPage}>RULES</button>
      </div>
    </div>
  );
};

export default Rules;
