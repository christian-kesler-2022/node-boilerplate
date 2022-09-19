var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/index.html');
});

app.get('/styles.css', function (req, res) {
  res.sendFile(__dirname + '/view/styles.css');
});

app.listen(3000);
