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

### HTML [link](https://github.com/bernamaloku/grupparbete-vh/blob/616bca5bd27fcb1c97dddc91f18e37182e833d08/index.html)

The "nav-btn" element contains a "label" element with a "for" attribute that matches the "id" of the checkbox.
Inside the "label" element, there are three "span" elements, these "span" elements will be used to create the toggle button icon.

```html
<div class="nav-btn">
  <label for="nav-check">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>
```

### CSS [link](https://github.com/bernamaloku/grupparbete-vh/blob/e556aeae084975fba6f2d022d00a0d30472997fc/css/script.css)

The cards in the Home page aswell as the function page use div containers that allows them to be styles so that they're in the order we want them to. In this case the function container is styled as a flex display that makes the card be right in the middle meanwhile the home container has two cards in a row.

```css
#function-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#home-container {
  width: 100%;
  min-height: 100%;
  flex-wrap: wrap;
}
```

### Javascript [link](https://github.com/bernamaloku/grupparbete-vh/blob/e556aeae084975fba6f2d022d00a0d30472997fc/js/function.js)

This code defines a JavaScript object called "weather" that has two properties: "apiKey" and "fetchWeather". The "apiKey" property is set to a string "yourApiKey", which should be replaced with a valid API key from OpenWeatherMap. The "fetchWeather" property is a function that takes a single argument called "city".
This function uses the Fetch API to make a GET request to the OpenWeatherMap API, passing in the city as a parameter and appending the apiKey property of the weather object. If the response from the API is not OK, it will display an alert with "No weather found." and throw an error with the same message. If the response is OK, the function will parse the response as JSON and call the "displayWeather" function passing the data as an argument.

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
  },
};
```

### Requirements

- iOS 11.0 or later / Android 4.4 and up.
- Internet connection.

### Mock Up 

![mockupfinished](https://user-images.githubusercontent.com/106542048/213654921-bc9ead8c-e3a1-4b31-b8db-332cb6cb1fe3.png)


### Wireframe

![Frame](https://user-images.githubusercontent.com/106542048/213654804-defd5cfd-994f-4366-9e37-196f39f084cf.png)
![Frame-1](https://user-images.githubusercontent.com/106542048/213654820-723f84a4-3bd0-437c-b899-0c02ce35169b.png)


### Problems

1. Please make sure you have written in the right city **_(in English - no special signs ex. öäå)_** .
2. App doesn't work without internet so make sure your internet connection is on.


### Support

If you encounter any issues or have any questions, please contact us at support@openweatherapp.com.


---

### Note

This app uses OpenWeatherMap API to retrieve weather data. By using this app, you are agreeing to the OpenWeatherMap API terms of service.
This app allows users to view current weather conditions and forecast for a specific location.
