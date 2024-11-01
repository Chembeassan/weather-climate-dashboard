function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
}
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Chart.js
    const ctx = document.getElementById('history-chart').getContext('2d');
    let historyChart;

    const apiKey = '407f37500f215196bd7d0e3c802375c8'; 

    // Function to fetch historical data
    const fetchHistoricalData = async (latitude, longitude) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${Math.floor(Date.now() / 1000) - 86400}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch historical data");

            const data = await response.json();
            const temperatures = data.hourly.map(hour => hour.temp);
            const timestamps = data.hourly.map(hour => new Date(hour.dt * 1000).toLocaleTimeString());

            // Update or create chart
            if (historyChart) {
                historyChart.data.labels = timestamps;
                historyChart.data.datasets[0].data = temperatures;
                historyChart.update();
            } else {
                historyChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: timestamps,
                        datasets: [{
                            label: 'Temperature (°C)',
                            data: temperatures,
                            borderColor: '#1E90FF',
                            fill: false
                        }]
                    },
                    options: {
                        scales: {
                            x: { title: { display: true, text: 'Time' } },
                            y: { title: { display: true, text: 'Temperature (°C)' } }
                        }
                    }
                });
            }
        } catch (error) {
            console.error("Error fetching historical data:", error);
        }
    };

    // Function to fetch weather alerts
    const fetchWeatherAlerts = async (latitude, longitude) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch weather alerts");

            const data = await response.json();
            const alerts = data.alerts || [];

            const alertContainer = document.getElementById('alert-message');
            if (alerts.length > 0) {
                alertContainer.innerHTML = alerts.map(alert => `
                    <div class="alert">
                        <h3>${alert.event}</h3>
                        <p>${alert.description}</p>
                        <p><strong>Start:</strong> ${new Date(alert.start * 1000).toLocaleString()}</p>
                        <p><strong>End:</strong> ${new Date(alert.end * 1000).toLocaleString()}</p>
                    </div>
                `).join('');
            } else {
                alertContainer.innerHTML = "<p>No active alerts</p>";
            }
        } catch (error) {
            console.error("Error fetching weather alerts:", error);
        }
    };

    // Example: Load data for a default location (e.g., Los Angeles)
    const defaultLatitude = 34.0522;
    const defaultLongitude = -118.2437;

    fetchHistoricalData(defaultLatitude, defaultLongitude);
    fetchWeatherAlerts(defaultLatitude, defaultLongitude);

    // "View All Alerts" button functionality
    document.getElementById('view-all-alerts').addEventListener('click', () => {
        const alertContainer = document.getElementById('alert-message');
        alertContainer.classList.toggle('expanded'); // Toggle visibility of more alerts if implemented
    });
});

// Check for alerts based on API data
if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
  showAlert('Severe Thunderstorm Alert!');
}

