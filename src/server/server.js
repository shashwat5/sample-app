var express = require("express");

var app = express();

app.get("/health", (req, res) => {
	res.status(200).send("OK");
});

module.exports = app;
