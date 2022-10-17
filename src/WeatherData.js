import React from "react";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="weather-data">
      <div>
        <h1 className="location-title">
          <i className="fa-solid fa-location-dot"></i>
          <i className="location"> {props.data.city}</i>
        </h1>
      </div>

      <div className="row">
        <div className="col-8 current-date-title">
          <h2>
            <i className="fa-regular fa-calendar"></i>
            <span className="current-date">
              <FormattedDate date={props.data.date} />
            </span>
          </h2>
        </div>
        <div className="col-4 clock">
          <h2>
            <div className="time-description">Last updated</div>
            <i className="fa-regular fa-clock"></i>
            <i className="current-time">
              {" "}
              <FormattedTime time={props.data.date} />
            </i>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 temperature-title">
          <h3>
            <span>
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </span>
            <i className="temperature">{props.data.temperature}</i>
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
              <span className="text-capitalize"> {props.data.description}</span>
            </li>
            <li>
              <i className="fa-solid fa-wind"></i>
              <span>Wind-speed:</span>
              <span> {props.data.wind}</span>
              <span>km/h</span>
            </li>
            <li>
              <i className="fa-solid fa-droplet"></i>
              <span>Humidity:</span>
              <span className="list"> {props.data.humidity}</span>
              <span>%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
