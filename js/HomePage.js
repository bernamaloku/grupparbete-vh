
let weather = {
    apiKey: "2e27da28ee464709326343fb9e56ad73",
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
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

    },
   
};



weather.fetchWeather("Malmö"); 

let weather2= {
    apiKey: "2e27da28ee464709326343fb9e56ad73",
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
            .then((data) => this.displayWeather2(data));
    },
    
    displayWeather2: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city2").innerText = "Weather in " + name;
        document.querySelector(".icon2").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".temp2").innerText = temp + "°C";
        document.querySelector(".humidity2").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind2").innerText =
            "Wind speed: " + speed + " km/h";
        // document.querySelector(".weather2").classList.remove("loading");
    },
};

weather2.fetchWeather("stockholm");

let weather3= {
    apiKey: "2e27da28ee464709326343fb9e56ad73",
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
    
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city3").innerText = "Weather in " + name;
        document.querySelector(".icon3").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description3").innerText = description;
        document.querySelector(".temp3").innerText = temp + "°C";
        document.querySelector(".humidity3").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind3").innerText =
            "Wind speed: " + speed + " km/h";
    },
};
weather3.fetchWeather("gothenburg");
 
let weather4= {
    apiKey: "2e27da28ee464709326343fb9e56ad73",
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
    
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city4").innerText = "Weather in " + name;
        document.querySelector(".icon4").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description4").innerText = description;
        document.querySelector(".temp4").innerText = temp + "°C";
        document.querySelector(".humidity4").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind4").innerText =
            "Wind speed: " + speed + " km/h";
    },
};

weather4.fetchWeather("copenhagen");