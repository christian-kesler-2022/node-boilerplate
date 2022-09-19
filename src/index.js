var express = require('express');
var routes = require('./routes.js');
var public = require('./public.js');

var app = express();

routes(app);
public(app);

app.listen(3000);
