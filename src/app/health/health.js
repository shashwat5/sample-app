var bridge = require("../helper/bridge.js");

module.exports = function() {
	var main = document.getElementById("main");
	bridge.get("/health")
		.then((response) => {
			main.innerHTML = `the server health is : ${response.responseText}`;
		}).catch((response) => {
			main.innerHTML = `the server is unreachable: ${response.responseText}`;
		});
};
