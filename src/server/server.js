var express = require("express");
var routes = require("./routes.js");
var app = express();

app.use(express.static("build"));
app.use(routes);

module.exports = app;
