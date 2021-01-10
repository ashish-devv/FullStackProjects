const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/contact", (req, res) => {
  res.send("CONATCT ME AT : akashish908@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("this is Created with ❤ by ashish");
});

app.listen(3000, function () {
  console.log("Server Started On 3000");
});
