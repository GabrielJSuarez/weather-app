const getWeather = async (url) => {
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
    const CITY = document.querySelector('#city-name').value;
    const API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=51d8626e1f1408b78641a58cf1dbb707&units=metric`;
    const DATA = getWeather(API_URL_CALL);

})






