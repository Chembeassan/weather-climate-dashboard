async function fetchClimateData(location) {
  const apiKey = 'YOUR_API_KEY';
  const response = await fetch(`https://api.visualcrossing.com/history/${location}?key=${apiKey}`);
  const data = await response.json();
  // Process data for graphs
}

