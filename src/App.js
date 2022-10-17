import React from "react";

import Weather from "./Weather.js";
import GithubRepo from "./GithubRepo";

import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
      </div>
      <GithubRepo />
    </div>
  );
}

export default App;
