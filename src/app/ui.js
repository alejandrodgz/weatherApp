export class Ui{
    constructor(){
        this.location = document.getElementById("weather-location");
        this.description = document.getElementById("weather-description");
        this.string = document.getElementsByClassName("weather-string")[0];
        this.humidity = document.getElementById("weather-humidity");
        this.wind = document.getElementById("weather-wind");

    }

    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.description.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + " °C";
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + "%";
        this.wind.textContent = "Wind Speed: " + weather.wind.speed + ' m/s';

    }
}