var express = require("express");
var router = express.Router();
//Controllers
var health = require("./controllers/health.js");
var indexResolver = require("./controllers/index-resolver.js");

router.get("/health", health);
router.get("/", indexResolver);

module.exports = router;
