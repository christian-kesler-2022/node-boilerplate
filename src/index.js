var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/raw.html');
});

app.get('/raw', function (req, res) {
  res.sendFile(__dirname + '/view/raw.html');
});

app.get('/bootstrap', function (req, res) {
  res.sendFile(__dirname + '/view/bootstrap.html');
});

app.get('/styles.css', function (req, res) {
  res.sendFile(__dirname + '/view/styles.css');
});

app.use('/devextreme/map-demo', express.static('./view/devextreme/map-demo'));

app.use(
  '/devextreme/getting-started',
  express.static('./view/devextreme/getting-started')
);

app.get('/devextreme/map-demo', function (req, res) {
  res.sendFile(__dirname + './view/devextreme/map-demo/index.html');
});

app.get('/devextreme/getting-started', function (req, res) {
  res.sendFile(__dirname + './view/devextreme/getting-started/index.html');
});

app.listen(3000);
