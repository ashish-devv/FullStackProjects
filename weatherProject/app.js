const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
const e = require("express");

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const cityname = req.body.city;
  const apikey = "2cb7f44480ec9b8528dcc3cbde3258ca";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&appid=" +
    apikey +
    "&units=" +
    unit;
  https.get(url, (response) => {
    console.log(response.statusCode);
    if (response.statusCode == 404) {
      res.send("Please Enter Correct City name");
    } else {
      response.on("data", (data) => {
        const weather = JSON.parse(data);
        const temp = weather.main.temp;
        const weatherDesc = weather.weather[0].description;
        const icon = weather.weather[0].icon;
        const imageurl = "";
        console.log(temp, weatherDesc);
        res.write("the Temprature in " + cityname + " is " + temp + " celcius");
        res.send();
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server Started on 3000");
});
