"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
console.log('API Key:', config_1.config.apiKey);
function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config_1.config.apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
    })
        .catch(error => {
        console.error('Error:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Something went wrong!</p>`;
    });
}
(_a = document.getElementById('weatherForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', showWeatherDetails);
