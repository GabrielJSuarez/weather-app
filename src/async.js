import { domManipulation } from "./DOM";

export const callApi = (() => {

    const getResponse = async () => {
        try {
            const response = await fetch(domManipulation.getWeatherUrl()[0]);
            const weather = await response.json();

            const imageURL = `https://api.unsplash.com/photos/random?client_id=NCBaOQJIb0LqtbRq7KmDTq7TLlVSqqzHoOnBVm2OVEo&query=${weather.weather[0].description}`;
            const imageResponse = await fetch(imageURL);
            const image = await imageResponse.json();

            domManipulation.setBackground(image.urls.full);

            domManipulation.setWeatherInfo(weather.name, weather.main.temp, weather.weather[0].description, weather.main.temp_min, weather.main.temp_max);

        } catch (err) {
            throw new Error(err);
        }
    }

    const renderWeather = () => {
        const WEATHER_BTN = document.querySelector('#weather-btn');
        WEATHER_BTN.addEventListener('click', () => {
            getResponse();
        })
    }

    return {
        renderWeather
    }
})();
