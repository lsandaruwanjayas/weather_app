/* 8. Updating the UI */

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const Weather = data.Weather; 

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="mu-3">${Weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${Weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
};

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}

const updateCity = async (city) => {

     const cityDets = await getCity(city);
     const Weather = await getWeather(cityDets.Key);

     return{ cityDets, Weather };
};

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then( data => updateUI(data))
    .catch(err => console.log(err));
});