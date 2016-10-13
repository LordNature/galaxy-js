require('./controllers/terminal');
require('./controllers/api');

var express = require('express'),
	app = express(),
	year = new Date().getFullYear(),
	development = true;

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Home', year: year, uptime: uptime});
});

app.get('/anime', function (req, res) {
  res.send('Coming soon <br><a href="/">Go home.</a>');
});

// Cool. If else statements are next gen. :^)
if (development = true) {
	app.listen(3000, function () {
		console.log('GN: Development Mode (3000)');
	});
} else {
	app.listen(8080, function () {
		console.log('GN: Production Mode (8080)');
	});
}