var _ = require("lodash");
var app = require("../../src/server/server.js");
var http = require("http");
var { JSDOM } = require("jsdom");

var testPort = 3003;

describe("The app renders the index page", function() {
	var server;
	beforeEach(function(done) {
		server = app.listen(testPort, _.ary(done, 0));
	});

	describe("When a request is sent to root path", function() {
		var result;

		beforeEach(function(done) {
			JSDOM.fromURL(`http://localhost:${testPort}`, {}).then(dom => {
		  		result = dom;
		  		done();
			});
		});

		it("document title is `Sample App`", function() {
			expect(result.window.document.title).to.be.equal(`Sample App`);
		});
	});

	afterEach(function() {
		server.close();
	});
});
