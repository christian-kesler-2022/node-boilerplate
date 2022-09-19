var express = require('express');

module.exports = function (app) {
  app.get('/api/accounts', function (req, res) {
    
    res.send(JSON.stringify(list));
  });

  app.get('/raw', function (req, res) {
    res.sendFile(__dirname + '/view/raw.html');
  });

  app.get('/bootstrap', function (req, res) {
    res.sendFile(__dirname + '/view/bootstrap.html');
  });
};
