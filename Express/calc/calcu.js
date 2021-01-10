const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("calculated :" + result);
});

app.get("/bmicalc", (req, res) => {
  res.sendFile(__dirname + "/bmicalc.html");
});

app.post("/bmicalc", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is  :" + bmi);
});
app.listen(3000, () => {
  console.log("running on 3000");
});
