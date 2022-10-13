import React from "react";
// import axios from "axios";

import Weather from "./Weather.js";
import GithubRepo from "./GithubRepo";

import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather />
      </div>
      <GithubRepo />
    </div>
  );
}

export default App;
