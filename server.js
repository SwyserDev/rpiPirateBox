var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static(__dirname));

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('index.html');
  console.log('Serving index.html');
});

router.get('/messages', function(req, res) {
  fs.readFile( __dirname + "/data/" + "messages.json", 'utf8', function (err, data) {
    res.send(JSON.parse(data));
   });
});

router.get('/photos', function(req, res) {
  fs.readFile( __dirname + "/data/" + "photos.json", 'utf8', function (err, data) {
    res.send(JSON.parse(data));
   });
});

app.use('/api', router);
app.listen(port);

console.log('The server is running on port: ' + port);
