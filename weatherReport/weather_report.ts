import { config } from '../config';
console.log('API Key:', config.apiKey);
function showWeatherDetails(event: any): void {
    event.preventDefault();

    const city = (document.getElementById('city') as HTMLInputElement).value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo') as HTMLElement;
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            const weatherInfo = document.getElementById('weatherInfo') as HTMLElement;
            weatherInfo.innerHTML = `<p>Something went wrong!</p>`;
        });
}

document.getElementById('weatherForm')?.addEventListener('submit', showWeatherDetails);