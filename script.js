const apiKey = "7ba49fd4df24d271c346bee3e0efb494";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "stickers/Clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "stickers/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "stickers/drizzle.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "stickers/rain.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "stickers/mist.png";
    }
    document.querySelector(".weather").style.display ="block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Default weather for New York on page load
checkWeather("New York");