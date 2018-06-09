/* 1. Right now, your Express server handles every request the same way,
regardless of the request's method or path.
*/

'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.use(function(req, res) {
  var guests = ['Mary', 'Don'];
  res.send(guests);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
