import React, { useState } from "react";
import axios from "axios";

import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast.js";

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
    const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function onClickCurrentLocButton(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentPosition);
  }

  function getCurrentPosition(position) {
    let apiKey = "06253f1b1ac0432d6e25594b80a53a85";
    let apiURL = "https://api.openweathermap.org/data/2.5/weather";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    axios
      .get(`${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(displayWeather);
  }

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
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
                  autoComplete="off"
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
                <button
                  className="btn shadow-sm current-button"
                  onClick={onClickCurrentLocButton}
                >
                  Current
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherData data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  }
}
