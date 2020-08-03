var express = require('express');
var app = express();
var fs = require('fs');
var config = require('./conf/conf.json');
var port = config.server.dev.port;


app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

});