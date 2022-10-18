import React, { useState } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function getWeatherForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function searchForecast() {
    let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiURL = "https://api.openweathermap.org/data/2.5/onecall";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    axios
      .get(`${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(getWeatherForecast);
  }

  if (!loaded) {
    searchForecast();
    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7 && index != 0) {
              return <WeatherForecastDay data={dailyForecast} key={index} />;
            }
          })}
        </div>
      </div>
    );
  }
}
