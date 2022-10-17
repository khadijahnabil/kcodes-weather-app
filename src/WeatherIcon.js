import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "/icons/clear-day.svg",
    "01n": "/icons/clear-night.svg",
    "02d": "/icons/partly-cloudy-day.svg",
    "02n": "/icons/partly-cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/overcast-day.svg",
    "04n": "/icons/overcast-night.svg",
    "09d": "/icons/partly-cloudy-day-drizzle.svg",
    "09n": "/icons/partly-cloudy-night-drizzle.svg",
    "10d": "/icons/partly-cloudy-day-rain.svg",
    "10n": "/icons/partly-cloudy-night-rain.svg",
    "11d": "/icons/thunderstorms-day.svg",
    "11n": "/icons/thunderstorms-night.svg",
    "13d": "/icons/snowflake.svg",
    "13n": "/icons/snowflake.svg",
    "50d": "/icons/mist.svg",
    "50n": "/icons/mist.svg",
  };
  return <img src={codeMapping[props.code]} alt={props.alt} />;
}
