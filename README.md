# WeatherApp
Weather App
This is a Weather App built with Angular for the frontend and a C# ASP.NET Core Web API for the backend. The app displays a 5-day weather forecast for a selected city, fetching data from the OpenWeatherMap API.

Features
Display current weather conditions including temperature, humidity, and wind speed.
Display 5-day forecast with high and low temperatures for each day.
Responsive design for various screen sizes and orientations.
Hourly forecast feature allowing users to view detailed weather information for each hour.
City selection functionality.
Automatic data refresh every 5 minutes.
Error handling for network issues, API failures, and incorrect inputs.
Technologies Used
Angular for the frontend.
C# ASP.NET Core Web API for the backend.
OpenWeatherMap API for weather data.
Flex Layout Module for Angular responsive design.
Installation and Setup
Clone this repository.
Navigate to the weather-app directory for the frontend and weather-api directory for the backend.
Install dependencies using npm install for Angular and restore packages for C# using your preferred package manager.
Set up your OpenWeatherMap API key in the C# API project.
Run the backend server using dotnet run in the weather-api directory.
Run the Angular app using ng serve in the weather-app directory.
Access the app in your browser at http://localhost:4200.
Usage
Enter a city name in the search box to view the current weather and 5-day forecast.
Click on each day in the forecast to reveal hourly weather details.
Credits
Weather data provided by OpenWeatherMap API.
Angular and ASP.NET Core for web development frameworks.
License
This project is licensed under the MIT License - see the LICENSE file for details.
