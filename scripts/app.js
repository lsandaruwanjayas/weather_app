/* 6. Updating the Location */

const cityForm = document.querySelector('form');

const updateCity = async (city) => {

     const cityDets = await getCity(city);
     const Weather = await getWeather(cityDets.Key);

     return{
        cityDets: cityDets,
        weather: Weather
     };
};

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then( data => console.log(data))
    .catch(err => console.log(err));
});