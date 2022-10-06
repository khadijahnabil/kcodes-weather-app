import React from "react";

import "./WeatherData.css";

export default function WeatherData() {
  let weatherData = {
    city: "Amsterdam, NL",
    date: "Monday, 19 September 2022",
    time: "19:48",
    temperature: 25,
    description: "Clear",
    windSpeed: 20,
    humidity: 63,
  };

  return (
    <div className="weather-data">
      <div>
        <h1 className="location-title">
          <i className="fa-solid fa-location-dot"></i>
          <i className="location"> {weatherData.city}</i>
        </h1>
      </div>

      <div className="row">
        <div className="col-8 current-date-title">
          <h2>
            <i className="fa-regular fa-calendar"></i>
            <span className="current-date">{weatherData.date}</span>
          </h2>
        </div>
        <div className="col-4 clock">
          <h2>
            <div className="time-description">Last updated</div>
            <i className="fa-regular fa-clock"></i>
            <i className="current-time"> {weatherData.time}</i>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 temperature-title">
          <h3>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt={weatherData.description}
            />
            <i className="temperature">{weatherData.temperature}</i>
            <span className="temperature-metric">
              <a href="/"> °C</a> | <a href="/">°F</a>
            </span>
          </h3>
        </div>
        <div className="col-6 weather-description">
          <ul className="weather-list">
            <li>
              <i className="fa-solid fa-circle-info"></i>
              <span>Weather condition:</span>
              <span> {weatherData.description}</span>
            </li>
            <li>
              <i className="fa-solid fa-wind"></i>
              <span>Wind-speed:</span>
              <span> {weatherData.windSpeed}</span>
              <span>km/h</span>
            </li>
            <li>
              <i className="fa-solid fa-droplet"></i>
              <span>Humidity:</span>
              <span className="list">{weatherData.humidity}</span>
              <span>%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
