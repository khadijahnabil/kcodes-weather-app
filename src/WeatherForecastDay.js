import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function formattedDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{formattedDay()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size="60px"
        margin="5px 0px"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}{" "}
        </span>
        <span className="WeatherForecast-temperature-max">
          | {maxTemperature()}
        </span>
      </div>
    </div>
  );
}
