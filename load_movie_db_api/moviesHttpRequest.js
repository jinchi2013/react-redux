const http = require('http');



module.exports = function (options, response) {
	var json;
	var req = http.request(options, function (res) {
  		var chunks = [];

	  	res.on("data", function (chunk) {
	    	chunks.push(chunk);
	  	});

	  	res.on("end", function () {
	    	var body = Buffer.concat(chunks);
	    	json = JSON.parse(body);
	    	//console.log(json);
	    	response.json(json);
	  	});
	});

	req.write("{}");
	req.end();
}