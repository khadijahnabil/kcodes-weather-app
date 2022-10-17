import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <i className="temperature">{props.celsius}</i>
        <span className="temperature-metric">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <i className="temperature">{Math.round(fahrenheit())}</i>
        <span className="temperature-metric">
          {" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
