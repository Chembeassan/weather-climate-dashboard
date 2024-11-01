const ctx = document.getElementById('history-chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Temperature (°C)',
      data: [15, 20, 25, 30],
      borderColor: '#1E90FF',
    }]
  }
});

