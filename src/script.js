/**get current date and time */
let now = new Date();

function displayDay(time) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[time.getDay()];
  let date = time.getDate();
  let month = months[time.getMonth()];
  let year = time.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = displayDay(now);

function displayTime(time) {
  let hour = time.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minute = time.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;

  return `${hour}:${minute}`;
}

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = displayTime(now);

/** fetch location temperature by search input */

function searchCity(event) {
  event.preventDefault();
  let apiKey = "80dc7df8d65a892260c3615024200847";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather";
  let cityName = document.querySelector("#search-text-input").value;
  axios
    .get(`${apiURL}?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(showTemperature);
}

function showTemperature(response) {
  let location = document.querySelector("#location");
  location.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.innerHTML = response.data.weather[0].main;

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let searchBar = document.querySelector("#search-city-form");
searchBar.addEventListener("submit", searchCity);

/** getting the current location temp */

function displayCurrentPosition(position) {
  let apiKey = "06253f1b1ac0432d6e25594b80a53a85";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios
    .get(`${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(showTemperature);
}

let currentLocButton = document.querySelector("#current-location-button");
currentLocButton.addEventListener("click", onClickCurrentLocButton);

function onClickCurrentLocButton(event) {
  navigator.geolocation.getCurrentPosition(displayCurrentPosition);
}

/** celcius and fahrenheit conversion */
let currentState = "celsius";

function convertToCelsius(temperatureInFahrenheit) {
  return Math.round((temperatureInFahrenheit - 32) * 0.5556);
}

function convertToFahrenheit(temperatureInCelsius) {
  return Math.round((temperatureInCelsius * 9) / 5 + 32);
}

function displayTemperatureC() {
  let temperatureDiv = document.querySelector("#temperature");
  if (currentState === "celsius") return;
  temperatureDiv.innerHTML = convertToCelsius(temperatureDiv.innerHTML);
  currentState = "celsius";
}

function displayTemperatureF() {
  let temperatureDiv = document.querySelector("#temperature");
  if (currentState !== "celsius") return;
  temperatureDiv.innerHTML = convertToFahrenheit(temperatureDiv.innerHTML);
  currentState = "fahrenheit";
}

let fahrenheitAnchor = document.querySelector("#fahrenheit-metric");
fahrenheitAnchor.addEventListener("click", displayTemperatureF);

let celsiusAnchor = document.querySelector("#celsius-metric");
celsiusAnchor.addEventListener("click", displayTemperatureC);
