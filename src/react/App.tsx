import React from "react";
import "./App.scss";
import { HomePage } from "../react/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IssuesPage } from "./issuesPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/issues" element={<IssuesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
