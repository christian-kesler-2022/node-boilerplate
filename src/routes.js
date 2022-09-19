var express = require('express');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/raw.html');
  });

  app.get('/raw', function (req, res) {
    res.sendFile(__dirname + '/view/raw.html');
  });

  app.get('/bootstrap', function (req, res) {
    res.sendFile(__dirname + '/view/bootstrap.html');
  });
};
