// Function to fetch and display historical weather data
async function fetchHistoricalData(location = "Los Angeles", days = 7) {
  const apiKey = '089d466540585d5b33a138a4b7014e40';
  const endDate = Math.floor(Date.now() / 1000); // Current timestamp
  const startDate = endDate - (days * 86400); // 7 days ago

  // Sample API URL, update with your chosen API provider's requirements
  const url = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${location}&dt=${startDate}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.forecast) {
      const dates = data.forecast.forecastday.map(day => day.date);
      const temperatures = data.forecast.forecastday.map(day => day.day.avgtemp_c);

      displayHistoricalChart(dates, temperatures);
    } else {
      console.error("No historical data found");
    }
  } catch (error) {
    console.error("Error fetching historical data:", error);
  }
}

// Function to display data on the chart
function displayHistoricalChart(labels, data) {
  const ctx = document.getElementById('history-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Avg Temperature (°C)',
        data: data,
        backgroundColor: 'rgba(30, 144, 255, 0.2)',
        borderColor: 'rgba(30, 144, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: { title: { display: true, text: 'Date' } },
        y: { title: { display: true, text: 'Temperature (°C)' } }
      },
      responsive: true,
    }
  });
}
document.getElementById('load-historical-data').addEventListener('click', () => {
  fetchHistoricalData();
});

// Fetch data and render on page load or based on an event
document.addEventListener('DOMContentLoaded', () => {
  fetchHistoricalData();
});

