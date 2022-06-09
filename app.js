//app.js
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const { execPath } = require("process");

//appset & appuse 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static("public"));
app.use(express.json());




app.get("/", function (req, res) {
    res.render("index");
  });
//listening

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully");
});