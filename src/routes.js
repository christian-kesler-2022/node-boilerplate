var express = require('express');
var url = require('url');

module.exports = function (app) {
  app.set('view engine', 'ejs');

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/raw.html');
  });

  app.get('/raw', function (req, res) {
    res.sendFile(__dirname + '/views/raw.html');
  });

  app.get('/bootstrap', function (req, res) {
    res.sendFile(__dirname + '/views/bootstrap.html');
  });

  app.get('/account', function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    if (queryObject.tab !== undefined) {
      if (queryObject.tab === 'home') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'personal-info') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'data-and-privacy') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'security') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'people-and-sharing') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'payments-and-subscriptions') {
        res.render('account', { tab: queryObject.tab });
      } else if (queryObject.tab === 'about') {
        res.render('account', { tab: queryObject.tab });
      } else {
        res.redirect('/account?tab=home');
      }
    } else {
      res.redirect('/account?tab=home');
    }
  });

  app.get('/search', function (req, res) {
    res.sendFile(__dirname + '/views/search.html');
  });
};
