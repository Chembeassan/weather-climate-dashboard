import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      "weather": "Weather",
      "temperature": "Temperature",
      // Additional translations
    }
  },
  es: {
    translation: {
      "weather": "Clima",
      "temperature": "Temperatura",
      // Additional translations
    }
  }
};

i18next.init({
  lng: 'en', // Default language
  resources
});

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
  document.getElementById('weather-label').innerHTML = i18next.t('weather');
  // Update other text content accordingly
}

export { changeLanguage }; // Export the function for use in other files
