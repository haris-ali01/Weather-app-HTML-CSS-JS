
// Getting data from Weather APIs.

const apiKey = 'd7e578e9ef91681f3436aad8de99d609';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';

        document.querySelector('.humidity-value').innerHTML = data.main.humidity + '%';
        document.querySelector('.speed').innerHTML = data.wind.speed + ' km/h';


        if (data.weather[0].main == 'Clouds') {
            document.querySelector('.weather-icon').src = '../images/clouds.png';
        }

        else if (data.weather[0].main == 'Rain') {
            document.querySelector('.weather-icon').src = '../images/rain.png';
        }

        else if (data.weather[0].main == 'mist') {
            document.querySelector('.weather-icon').src = '../images/mist.png';
        }

        else if (data.weather[0].main == 'drizzle') {
            document.querySelector('.weather-icon').src = '../images/drizzle.png';
        }

        else if (data.weather[0].main == 'snow') {
            document.querySelector('.weather-icon').src = '../images/snow.png';
        }

        else {
            document.querySelector('.weather-icon').src = '../images/clear.png';
        }

        document.querySelector(".error").style.display = 'none';
        document.querySelector(".weather").style.display = 'block';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

function changeCity() {
    checkWeather('lahore');
}


