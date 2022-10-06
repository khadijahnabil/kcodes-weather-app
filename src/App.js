import React from "react";
// import axios from "axios";

import SearchEngine from "./SearchEngine";
import WeatherData from "./WeatherData";

import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <SearchEngine />
        <WeatherData />
      </div>
    </div>
  );
}

export default App;
