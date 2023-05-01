export class Weather{
    constructor(city, countryCode){
        this.apiKey = '82774ee57c1f73dd200b902472b4055f';
        this.city = city;
        this.countryCode = countryCode;
    }

    getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`
        return fetch(URI).
            then(response => response.json()).
            catch(error=> console.error(error));
    }

    changeLocation(city, country){
        this.city = city;
        this.countryCode = country;
    }
}