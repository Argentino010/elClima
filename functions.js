const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector("location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");


const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;
    const API_URL = 'https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}';

    fetch(API_URL)
        .then((Response) => Response.json())
        .then((data) => {
            if (!data.lenght)
                return alert('No coordinates found for ${cityName}');
            const { lat, lon, name } = data[0];
            getWeatherDetails(name, lat, lon);
        })

        .catch(() => {
            alert("An error ocurred while fetching the coordinates!");

        });

};
