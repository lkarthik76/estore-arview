// its for http config
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/'));

http.listen(8080, function() {
    console.log("Server is listening on port 8080");
});