const getResponse = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        throw new Error(err);
    }

}

const FORM = document.querySelector('#weather-form');
FORM.addEventListener('click', (e) => {
  e.preventDefault();
})

const WEATHER_BTN = document.querySelector('#weather-btn');
WEATHER_BTN.addEventListener('click', () => {

    let API_URL_CALL;
    let UNIT;
    const CITY = document.querySelector('#city-name').value;
    const CELSIUS = document.querySelector('#celsius').checked;

    if (CELSIUS) {
        API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=51d8626e1f1408b78641a58cf1dbb707&units=metric`;
        UNIT = 'Celsius';
    } else {
        API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=51d8626e1f1408b78641a58cf1dbb707&units=imperial`;
        UNIT = 'Fahrenheit';
    }

    const imageURL = `https://api.unsplash.com/photos/random?client_id=NCBaOQJIb0LqtbRq7KmDTq7TLlVSqqzHoOnBVm2OVEo&query=${CITY}`;
    getResponse(imageURL).then(data => {
        const BACKGROUND = document.querySelector('#bg-image');
        BACKGROUND.style.backgroundImage = `url('${data.urls.full}')`;
        BACKGROUND.style.backgroundSize = 'cover';
    })

    getResponse(API_URL_CALL).then(data => {
        const CARD = document.querySelector('#weather-info');
        const TEMP_CARD = document.querySelector('#temp-card');
        TEMP_CARD.classList.remove('d-none');
        const CITY = document.querySelector('#city');

        CITY.innerHTML = `${data.name}`;

        CARD.innerHTML = `
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Temperature:</span> ${data.main.temp}º (${UNIT})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Weather:</span> ${data.weather[0].description}
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Min Temp:</span> ${data.main.temp_min}º (${UNIT})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Max Temp:</span> ${data.main.temp_max}º (${UNIT})
            </li>
        `;
    });
})






