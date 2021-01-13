const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var items = [];

app.get("/", (req, res) => {
  var today = new Date();
  if (today.getDate() === 6 || today.getDate() === 0) {
    var day = "weekend";
  } else {
    var day = "weekDay";
  }
  res.render("list", { KindOfday: day, listofitems: items });
});

app.post("/", (req, res) => {
  items.push(req.body.newitem);
  res.redirect("/");
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running on port :" + port);
});
