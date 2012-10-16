var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hi World.");
	response.write(http.toString());
	response.end();
}).listen(8888);

//console.log(http);