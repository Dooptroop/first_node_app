//initialize our shit!
console.log("initializing...");

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');

});
//client can only access the client directory.
app.use('client',express.static(__dirname + '/client'));

serv.listen(2000);//navi - "Hey Listen" (SERVER listen on port :2000)