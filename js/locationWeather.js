// Function to get current location and fetch weather data
function getCurrentWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Success callback for geolocation
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetchWeatherData(latitude, longitude);
}

// Error callback for geolocation
function errorCallback() {
    alert("Unable to retrieve your location.");
}

// Fetch weather data from an API
function fetchWeatherData(lat, lon) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${lat},${lon}`)
        .then(response => response.json())
        .then(data => updateUI(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

// Update UI based on fetched weather data
function updateUI(data) {
    const alertLevel = document.getElementById('alert-level');
    const statusFill = document.getElementById('status-fill');
    const weatherTrend = document.getElementById('weather-trend');
    const currentLocation = document.getElementById('current-location');

    // Update current location
    currentLocation.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;

    // Determine alert level and status fill width based on conditions
    const conditionText = data.current.condition.text.toLowerCase();
    
    if (conditionText.includes("storm") || conditionText.includes("severe")) {
        alertLevel.innerText = "Danger";
        statusFill.style.width = "100%"; // Example for danger
        weatherTrend.innerText = `Trending: ${data.current.condition.text}`;
    } else if (conditionText.includes("rain") || conditionText.includes("snow")) {
        alertLevel.innerText = "Caution";
        statusFill.style.width = "75%"; // Example for caution
        weatherTrend.innerText = `Trending: ${data.current.condition.text}`;
    } else if (conditionText.includes("clear")) {
        alertLevel.innerText = "Normal";
        statusFill.style.width = "50%"; // Example for normal
        weatherTrend.innerText = `Trending: Clear Skies`;
    } else {
        alertLevel.innerText = "Normal";
        statusFill.style.width = "50%"; // Default for normal conditions
        weatherTrend.innerText = `Trending: ${data.current.condition.text}`;
    }

    // Additional updates can be made here for temperature, humidity, etc.
}

// Call the function to get current weather when the page loads
window.onload = getCurrentWeather;
