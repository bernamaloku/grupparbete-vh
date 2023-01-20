# Weather App Swe
A simple weather app that displays the current weather conditions for a specified location.

### Features
- Displays current temperature, humidity, and wind speed. 
- Allows user to search for current weather conditions by city name. 
- Allows user to see temperature for 4 cities (Malmo, Stockholm, Gothenburg and Copenhagen). 

### Languages used for this project are:

1. HTML
2. CSS
3. Javascript

### Getting Started
1. Download the app from the App Store or Google Play. 
2. Launch the app and allow it to access your location (if prompted). 
3. Search for a location by city name. 
4. View current weather conditions for 4 cities (Malmo, Stockholm, Gothenburg and Copenhagen). 

### (some) Code explained

```js 
let weather = {
    apiKey: "yourApiKey",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    }}
``` 

### Requirements
- iOS 11.0 or later / Android 4.4 and up. 
- Internet connection. 

### Problems
1. Please make sure you have written in the right city  ***(in English - no special signs ex. öäå)*** .
2. App doesn't work without internet so make sure your internet connection is on.

***
### Support
If you encounter any issues or have any questions, please contact us at support@openweatherapp.com.

### Note
This app uses OpenWeatherMap API to retrieve weather data. By using this app, you are agreeing to the OpenWeatherMap API terms of service.
This app allows users to view current weather conditions and forecast for a specific location.





