import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
