// app.js
document.addEventListener("DOMContentLoaded", () => {
  const location = "London";  // Replace with dynamic input later
  getWeather(location).then(weatherData => {
    document.getElementById("location").textContent = weatherData.name;
    document.getElementById("temperature").textContent = `Temperature: ${weatherData.main.temp}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
  });
});

