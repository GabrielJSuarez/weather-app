export const domManipulation = (() => {

    const preventPageReload = () => {
        const FORM = document.querySelector('#weather-form');
        FORM.addEventListener('click', (e) => {
            e.preventDefault();
        })
    }

    const getWeatherUrl = () => {
        let API_URL_CALL;
        let UNIT;
        const CITY_NAME= document.querySelector('#city-name').value;
        const CELSIUS = document.querySelector('#celsius').checked;

        if (CELSIUS) {
            API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=51d8626e1f1408b78641a58cf1dbb707&units=metric`;
            UNIT = 'Celsius';
        } else {
            API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=51d8626e1f1408b78641a58cf1dbb707&units=imperial`;
            UNIT = 'Fahrenheit';
        }

        return [API_URL_CALL, UNIT];
    }

    const setBackground = (imageUrl) => {
        const BACKGROUND = document.querySelector('#bg-image');
        BACKGROUND.style.backgroundImage = `url('${imageUrl}')`;
        BACKGROUND.style.backgroundSize = 'cover';
        BACKGROUND.style.backgroundPosition = 'center';
    }

    const setWeatherInfo = (cityName, mainTemp, description, minTemp, maxTemp) => {
        const CARD = document.querySelector('#weather-info');
        const TEMP_CARD = document.querySelector('#temp-card');
        TEMP_CARD.classList.remove('d-none');
        const CITY = document.querySelector('#city');

        CITY.innerHTML = `${cityName}`;

        CARD.innerHTML = `
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Temperature:</span> ${mainTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Weather:</span> ${description}
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Min Temp:</span> ${minTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Max Temp:</span> ${maxTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
        `;
    }

    return {
        preventPageReload, getWeatherUrl, setBackground, setWeatherInfo
    }
})();