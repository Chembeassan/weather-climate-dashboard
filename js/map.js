document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([34.0522, -118.2437], 10); // Default to Los Angeles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const weatherDisplay = document.createElement("div");
    weatherDisplay.id = "weather-info";
    weatherDisplay.style.padding = "10px";
    weatherDisplay.style.backgroundColor = "#ffffff";
    weatherDisplay.style.marginTop = "10px";
    document.getElementById("map-container").appendChild(weatherDisplay);

    // Function to fetch weather data
    const fetchWeather = async (latitude, longitude) => {
        const apiKey = '407f37500f215196bd7d0e3c802375c8'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Weather data not available");
            
            const data = await response.json();
            weatherDisplay.innerHTML = `
                <h3>Weather at (${latitude.toFixed(2)}, ${longitude.toFixed(2)})</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } catch (error) {
            weatherDisplay.innerHTML = "<p>Weather data could not be retrieved.</p>";
            console.error(error);
        }
    };

    // "View Map" button: shows default location
    document.getElementById('view-map').addEventListener('click', () => {
        const defaultCoords = [34.0522, -118.2437]; // Los Angeles
        map.setView(defaultCoords, 10);
        fetchWeather(defaultCoords[0], defaultCoords[1]);

        L.marker(defaultCoords)
            .addTo(map)
            .bindPopup("Los Angeles")
            .openPopup();
    });

    // "Current Location" button: shows user's location
    document.getElementById('current-location').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userCoords = [position.coords.latitude, position.coords.longitude];
                    map.setView(userCoords, 13);
                    fetchWeather(userCoords[0], userCoords[1]);

                    L.marker(userCoords)
                        .addTo(map)
                        .bindPopup("You are here!")
                        .openPopup();
                },
                (error) => {
                    alert("Unable to retrieve your location.");
                    console.error(error);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    });
});
