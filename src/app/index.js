require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../style/main.css');
const {Ui} = require('./ui');
const {Weather} = require('./weather');
const {Store} = require('./store');
const store = new Store();
const {city, countryCode} = store.getLocationData();
const weather = new Weather(city, countryCode);
const UI = new Ui();


document.addEventListener('DOMContentLoaded', websiteLogic());

async function websiteLogic(){
    const data = await weather.getWeather();
    UI.render(data);
    console.log(data);
    const button = document.getElementById("weather-change-btn");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const city = document.getElementById("city");
    const countryCode = document.getElementById("country-code");
    store.setLocationData(city.value, countryCode.value);
    weather.changeLocation(city.value, countryCode.value);
    websiteLogic();
});
}

