// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var apiRoutes = require("./app/routing/apiRoutes");
app.use(apiRoutes);

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);








// Start Server
app.listen(PORT, function () {
    console.log("App Listening on Port " + PORT);
});