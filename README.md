Final Project Proposal: Weather and Climate Data Dashboard

1. Overview

Purpose:  
The goal of this project is to create a web application that provides reliable weather forecasts and climate data to users, particularly in developing countries where access to such information is often limited.

Problem Statement: 
Many individuals, especially in rural areas, lack access to timely and accurate weather data, making them vulnerable to climate-related challenges. This project addresses this gap by offering a user-friendly platform that delivers critical weather information.

Target Audience: 
The primary users will include farmers, travelers, urban residents, and local government planners who need accurate weather information for decision-making.

2. Major Functions

1. Real-time Weather Data: Users can input their location to get live updates on temperature, humidity, and wind conditions.
2. Historical Climate Data: The app will display historical weather trends and statistics to help users understand seasonal patterns.
3. Extreme Weather Alerts: Users will receive notifications about severe weather conditions (e.g., storms, heatwaves).
4. Interactive Maps:  A visual representation of weather data through maps to highlight weather conditions in different areas.
5. Data Visualization: Graphs and charts to represent historical weather data, making it easier for users to analyze trends.
6. Geolocation Search: Automatically detects the user’s current location to provide immediate weather updates.
7. User-Friendly Interface: Simple navigation and mobile-first design for accessibility on smartphones.
8. Bookmarking Favorite Locations: Users can save multiple locations for quick access to weather data.
9. Multilingual Support: Options for language selection to cater to diverse user groups.
10. User Feedback and Ratings:A feature for users to leave feedback on the app's usability and accuracy of data.

3. Wireframes

- Mobile Wireframe:Home screen showing search bar, current weather data, and quick links to historical data and alerts.
- Desktop Wireframe:Expanded layout with sidebar navigation, detailed weather data, and graphs for historical trends.

4. External API Data Sources

- **OpenWeather API:** Provides real-time weather data with attributes such as temperature, humidity, wind speed, and conditions. It returns multiple data points (6-10) for each weather report.
- **Visual Crossing API:** Supplies comprehensive historical weather data, useful for analyzing long-term trends.

5. Initial Module List

- `weatherData.js:` Handles API calls and data retrieval for current weather.
- `climateData.js:` Manages historical data retrieval and processing.
- `alerts.js:` Monitors and displays extreme weather alerts.
- `visualization.js:` Contains functions for rendering graphs and charts.
- `ui.js:` Responsible for user interface components and interactions.
- `styles.css:` Contains all styling for the application.

6. Colors, Typography, and Specific Element Styling

Color Scheme:

- Primary Color:Sky Blue (#1E90FF) for highlights and buttons.
- Secondary Color: Light Gray (#F0F0F0) for background.
- Accent Color: Red (#FF4500) for alerts.

Typography:

- Headings: `Poppins`, bold for prominent text.
- Body: `Lato`, simple and readable for all other text.
- Accent Text: `Raleway`, for emphasis on key information.

Styling Elements:  
Interactive buttons with hover effects, rounded card styles for weather data displays.

7. Schedule (Weeks 5-7)

Week 5:  
- Set up project structure and integrate OpenWeather API.
- Implement real-time weather data display.

Week 6: 
- Add historical climate data retrieval and visualization.
- Develop extreme weather alerts feature.

Week 7:  
- Finalize UI design, perform testing, and address any bugs.
- Prepare for deployment and create documentation.

8. Trello Board

- Link to Trello Board:https://trello.com/invite/b/6716097c16697347246d6d51/ATTIeb97b1f9d431e1ef3b4d4f07eacf780378111FC9/weather-and-climate-data-dashboard-project
9. Netlify live link: https://wondrous-seahorse-3cb84c.netlify.app/ 
