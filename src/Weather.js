import React, { useState } from "react";
import axios from "axios";

import WeatherData from "./WeatherData";

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
      city: response.data.name,
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
    return "Loading...";
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
        <WeatherData data={weatherData} />
      </div>
    );
  }
}
