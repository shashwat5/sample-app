module.exports.get = function(url) {
	var promise = new Promise(function(resolve, reject){
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", url);
		xhttp.onerror = function() {
			reject({
				status: 0,
				responseText: "Unexpected Error"
			});
		};
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status !== 0) {
				if(this.status < 400){
					resolve(this);
				} else {
					reject(this);
				}
			}
		};
		
		xhttp.send();
		
	});
	return promise;
};
