// weatherData.js
const apiKey = 'openweather_api_key';  //  OpenWeather API key holder
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function getWeather(location) {
  try {
    const response = await fetch(`${apiUrl}${location}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

