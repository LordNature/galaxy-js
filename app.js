require('./controllers/terminal');

var express = require('express');
var app = express();
var year = new Date().getFullYear()
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Home', year: year, uptime: uptime});
});

app.get('/anime', function (req, res) {
  res.send('Coming soon <br><a href="/">Go home.</a>');
});

app.listen(8080, function () {
  console.log('galaxy-node started on port 8080.');
});