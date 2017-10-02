var _ = require("lodash");
var app = require("../../src/server/server.js");
var http = require("http");

var testPort = 3003;
describe("The app is healthy", function() {
	var server;
	beforeEach(function(done) {
		server = app.listen(testPort, _.ary(done, 0));
	});

	describe("When a request is sent to /health route", function() {
		var response;

		beforeEach(function(done) {
			http.get(`http://localhost:${testPort}/health`, (res) => {
				response = res;
				done();
			});
		});

		it("status of 200 is recieved", function() {
			expect(response.statusCode).to.be.equal(200);
		});

		it("status message of `OK` is recieved", function() {
			expect(response.statusMessage).to.be.equal("OK");
		});

	});

	afterEach(function() {
		server.close();
	});
});
