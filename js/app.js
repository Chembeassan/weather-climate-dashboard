// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set Location Button
  document.getElementById('set-location').addEventListener('click', () => {
    const location = prompt("Please enter your location:");
    if (location) {
      fetchWeather(location); // Call your function to fetch weather data
    }
  });

  // 2. View All Alerts Button
  document.getElementById('view-all-alerts').addEventListener('click', () => {
    // Function to display all alerts or navigate to another page
    alert('All alerts will be displayed here.');
  });

  // 3. Search Button
  document.getElementById('search-btn').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
      fetchWeather(location); // Call your function to fetch weather data
    } else {
      alert("Please enter a location to search.");
    }
  });

  // 4. Submit Feedback Button
  function submitFeedback() {
    const feedback = document.getElementById('feedback-input').value;
    if (feedback) {
      alert("Feedback submitted: " + feedback);
      document.getElementById('feedback-input').value = ''; // Clear the input field
    } else {
      alert("Please enter your feedback.");
    }
  }

  // Add the event listener to the Submit Feedback button
  document.querySelector('button[onclick="submitFeedback()"]').addEventListener('click', submitFeedback);
});
// Assuming your search button has the ID 'search-btn'
document.getElementById("search-btn").addEventListener("click", function() {
    const location = document.getElementById("location-input").value;
    const forecastDuration = document.getElementById("forecast-duration").value;

    // Redirect to the new page with parameters
    window.location.href = `weather-results.html?location=${encodeURIComponent(location)}&duration=${forecastDuration}`;
});

