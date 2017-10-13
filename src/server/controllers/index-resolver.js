var path = require("path");

module.exports = (req, res) => {
	res.sendFile(path.join(path.resolve("build"),"index.html"));
};
