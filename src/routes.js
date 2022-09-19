var express = require('express');
const url = require('url');

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

  app.get('/account', function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    if (queryObject.tab !== undefined) {
      if (queryObject.tab === 'home') {
        res.sendFile(__dirname + '/view/account.html');
      } else if (queryObject.tab === 'personal-info') {
        res.sendFile(__dirname + '/view/account.html');
      } else if (queryObject.tab === 'data-and-privacy') {
        res.sendFile(__dirname + '/view/account.html');
      } else if (queryObject.tab === 'security') {
        res.sendFile(__dirname + '/view/account.html');
      } else if (queryObject.tab === 'people-and-sharing') {
        res.sendFile(__dirname + '/view/account.html');
      } else if (queryObject.tab === 'payments-and-subscriptions') {
        res.sendFile(__dirname + '/view/account.html');
      }
    } else {
      res.redirect('/account?tab=home');
    }
  });

  app.get('/search', function (req, res) {
    res.sendFile(__dirname + '/view/search.html');
  });
};
