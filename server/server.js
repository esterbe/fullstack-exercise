//var http = require("http");

// //create server
// var server = http.createServer(function(request, response) {
//     recognizeFunc(request,response);
//
// });
// server.listen(8008);

var express = require('express');
var path = require('path');
var app = express();
var port = 8008;

app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log('app listening on port 8008!'));


