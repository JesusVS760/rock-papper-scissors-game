import React from "react";
import "./App.css";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntialChallengePage from "./pages/IntialChallengePage";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/:gameChoice" element={<IntialChallengePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
