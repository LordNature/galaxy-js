require('./controllers/terminal')
var express = require('express'),
	unirest = require ('unirest'),
	app = express(),
	year = new Date().getFullYear(),
	development = true

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
	res.render('index', {title: 'Home', uptime: uptime})
})

app.get('/anime', function (req, res) {
	unirest.get('https://kitsu.io/api/edge/users/41416')
	.headers({'Accept': 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json'})
	.end(function (result) {
		var api = result.body.data
		res.render('anime', { title: 'Anime List', api: api })
	})
})
// Cool. If else statements are next gen. :^)
if (development == true) {
	app.listen(3000, function () {
		console.log('GN: Development Mode (3000)')
	})
} else {
	app.listen(8080, function () {
		console.log('GN: Production Mode (8080)')
	})
}
