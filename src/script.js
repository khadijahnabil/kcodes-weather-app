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

function displayTime(time) {
  let hour = time.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minute = time.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;

  return `${hour}:${minute}`;
}

/**get current date and time */

function updateTime() {
  let now = new Date();
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = displayDay(now);
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = displayTime(now);
}

updateTime(); //update time at page load

/**format date of forecast */

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return day;
}

/**forecast HTML element */

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 7 && index != 0) {
      forecastHTML =
        forecastHTML +
        `
        <div class="col-2">
          <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
          <img 
            src="http://openweathermap.org/img/wn/${
              forecastDay.weather[0].icon
            }@2x.png"
            alt=""
            width= 50px; 
          />
          <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-min"> 
            ${Math.round(forecastDay.temp.min)}°
            </span>
            <span>|</span>
            <span class="weather-forecast-temperature-max"> 
            ${Math.round(forecastDay.temp.max)}°
            </span>
          </div>
        </div>
        `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

/**get 8 days forecast at every search*/

function getForecast(coordinates) {
  let apiKey = `ebef9ca4a8de66ed586fac628fade056`;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayForecast);
}

/** fetch location temperature by search input */

function displayTemperature(response) {
  updateTime(); //update time when searching new city
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

  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "80dc7df8d65a892260c3615024200847";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather";
  axios
    .get(`${apiURL}?q=${city}&appid=${apiKey}&units=metric`)
    .then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  searchCity(cityInput.value);
}

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", handleSubmit);
form.setAttribute("autocomplete", "off");

/** getting the current location temp */

function displayCurrentPosition(position) {
  let apiKey = "06253f1b1ac0432d6e25594b80a53a85";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios
    .get(`${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(displayTemperature);
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

searchCity("Amsterdam"); //display Amsterdam data for better landing page
