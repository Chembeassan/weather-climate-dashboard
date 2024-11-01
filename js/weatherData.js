async function fetchWeather(location) {
  const apiKey = '407f37500f215196bd7d0e3c802375c8';
  
  // Show loading spinner
  document.getElementById('loading').style.display = 'block';
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  const data = await response.json();
  
  // Hide loading spinner
  document.getElementById('loading').style.display = 'none';
  
  // Update UI
  document.getElementById('location').innerText = data.name;
  document.getElementById('temperature').innerText = `${Math.round(data.main.temp - 273.15)}°C`;
  document.getElementById('condition').innerText = data.weather[0].description;
  
  // Add additional metrics
  document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
document.getElementById('get-forecast-btn').addEventListener('click', () => {
    const duration = document.getElementById('forecast-duration').value;
    const location = document.getElementById('current-location').innerText; // Assuming you have this set from current weather

    fetchFutureWeatherData(location, duration);
});

async function fetchFutureWeatherData(location, duration) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    let url;

    // Construct URL based on duration
    if (duration === "1") {
        url = `https://api.weatherapi.com/v1/hourly.json?key=${apiKey}&q=${location}`;
    } else if (duration === "5") {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`;
    } else if (duration === "15") {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=15`;
    } else if (duration === "30") {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=30`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Update UI with fetched data
        updateFutureWeatherUI(data);
    } catch (error) {
        console.error('Error fetching future weather data:', error);
    }
}

function updateFutureWeatherUI(data) {
    // Assuming you want to display the first forecast as an example
    const forecast = data.forecast.forecastday[0].day; // Adjust based on your API response structure

    document.getElementById('temperature').innerText = `${forecast.avgtemp_c} °C`; // Average temperature
    document.getElementById('condition').innerText = forecast.condition.text; // Condition text
    document.getElementById('wind-speed').innerText = `${forecast.maxwind_kph} km/h`; // Wind speed
    document.getElementById('humidity').innerText = `${forecast.avghumidity}%`; // Humidity
    document.getElementById('uv-index').innerText = forecast.uv; // UV Index
}