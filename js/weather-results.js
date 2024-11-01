// Function to get URL parameters
function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        location: params.get("location"),
        duration: params.get("duration")
    };
}

// Fetch weather data based on location and duration
async function fetchWeatherData(location, duration) {
    const apiKey = "407f37500f215196bd7d0e3c802375c8";
    let url;

    // Construct the URL based on the duration
    if (duration === "1") {
        // Forecast for the next hour in 20-minute intervals
        url = `YOUR_API_URL/hourly?location=${encodeURIComponent(location)}&duration=1&key=${apiKey}`;
    } else if (duration === "3") {
        // Forecast for the next 3 hours
        url = `YOUR_API_URL/hourly?location=${encodeURIComponent(location)}&duration=3&key=${apiKey}`;
    } else if (duration === "7") {
        // Daily forecast for the next 7 days
        url = `YOUR_API_URL/daily?location=${encodeURIComponent(location)}&duration=7&key=${apiKey}`;
    } else if (duration === "14") {
        // Daily forecast for the next 14 days
        url = `YOUR_API_URL/daily?location=${encodeURIComponent(location)}&duration=14&key=${apiKey}`;
    } else {
        throw new Error("Invalid duration selected");
    }

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    
    const data = await response.json();
    return data;
}

// Display weather data on the page
function displayWeatherData(data, duration) {
    const resultsInfo = document.getElementById("results-info");
    resultsInfo.innerHTML = ""; // Clear previous results

    if (duration === "1" || duration === "3") {
        // Display hourly forecast
        const forecasts = data.forecasts; // Adjust based on your API response
        forecasts.forEach(forecast => {
            resultsInfo.innerHTML += `
                <div>
                    <p>Time: ${forecast.time}</p>
                    <p>Temperature: ${forecast.temperature} °C</p>
                    <p>Condition: ${forecast.condition}</p>
                    <p>Wind: ${forecast.wind} km/h</p>
                    <p>Humidity: ${forecast.humidity}%</p>
                </div>`;
        });
    } else {
        // Display daily forecast
        const dailyForecasts = data.daily; // Adjust based on your API response
        dailyForecasts.forEach(day => {
            resultsInfo.innerHTML += `
                <div>
                    <p>Date: ${day.date}</p>
                    <p>Temperature: ${day.temperature} °C</p>
                    <p>Condition: ${day.condition}</p>
                    <p>Wind: ${day.wind} km/h</p>
                    <p>Humidity: ${day.humidity}%</p>
                </div>`;
        });
    }
}

// Main execution
const { location, duration } = getURLParameters();
if (location && duration) {
    fetchWeatherData(location, duration)
        .then(data => displayWeatherData(data, duration))
        .catch(err => {
            console.error("Error fetching weather data:", err);
        });
}
