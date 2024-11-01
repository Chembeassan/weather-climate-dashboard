document.getElementById('search-btn').addEventListener('click', () => {
  const location = document.getElementById('location-input').value;
  fetchWeather(location);
});
function bookmarkLocation(location) {
  const list = document.getElementById('bookmarked-locations');
  const listItem = document.createElement('li');
  listItem.innerText = location;
  list.appendChild(listItem);
}
function saveLocation(location) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(location)) {
    favorites.push(location);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavoriteLocations();
  }
}

function displayFavoriteLocations() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = '';
  favorites.forEach(location => {
    favoritesList.innerHTML += `<li>${location}</li>`;
  });
}
function submitFeedback() {
  let feedback = document.getElementById('feedback-input').value;
  if (feedback) {
    let feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(feedbackList));
    alert('Feedback submitted!');
  }
}

