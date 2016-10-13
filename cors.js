var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  next();
 });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});