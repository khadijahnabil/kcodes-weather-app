import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  });
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    setWeatherData({ ready: false });
    event.preventDefault();
    setCity(event.target.elements.cityInput.value);
    search();
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (!weatherData.ready) {
    search();
    return "Loading wawa";
  } else {
    return (
      <div className="Weather">
        <div className="search-engine">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  name="cityInput"
                  type="text"
                  className="form-control"
                  placeholder="Enter a city..."
                  autoFocus="on"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  className="btn shadow-sm search-button"
                  value="Search"
                />
              </div>
              <div className="col-2">
                <button className="btn shadow-sm current-button">
                  Current
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="weather-data">
          <div>
            <h1 className="location-title">
              <i className="fa-solid fa-location-dot"></i>
              <i className="location"> {city}</i>
            </h1>
          </div>

          <div className="row">
            <div className="col-8 current-date-title">
              <h2>
                <i className="fa-regular fa-calendar"></i>
                <span className="current-date">
                  <FormattedDate date={weatherData.date} />
                </span>
              </h2>
            </div>
            <div className="col-4 clock">
              <h2>
                <div className="time-description">Last updated</div>
                <i className="fa-regular fa-clock"></i>
                <i className="current-time">
                  {" "}
                  <FormattedTime time={weatherData.date} />
                </i>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-6 temperature-title">
              <h3>
                <img src={weatherData.icon} alt={weatherData.description} />
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
                  <span className="text-capitalize">
                    {" "}
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-wind"></i>
                  <span>Wind-speed:</span>
                  <span> {weatherData.wind}</span>
                  <span>km/h</span>
                </li>
                <li>
                  <i className="fa-solid fa-droplet"></i>
                  <span>Humidity:</span>
                  <span className="list"> {weatherData.humidity}</span>
                  <span>%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
