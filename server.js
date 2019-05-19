var express = require('express'); // do not change this line
var server = express();

server.use(express.static('public'))

server.listen(8080, function () {
    console.log("started server");
});