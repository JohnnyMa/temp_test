var server = require("./server3");
var router = require("./router");

server.start(router.route);
