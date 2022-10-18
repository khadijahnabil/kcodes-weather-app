import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function getWeatherForecast(response) {
    console.log(response.data);
  }
  let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let apiURL = "https://api.openweathermap.org/data/2.5/onecall";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  axios
    .get(`${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(getWeatherForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size="60px" margin="5px 0px" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">10° </span>
            <span className="WeatherForecast-temperature-max">| 20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
