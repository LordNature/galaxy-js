require('./controllers/terminal')
var express = require('express'),
	unirest = require('unirest'),
	app = express(),
	anime = require('./controllers/anime')
	development = true

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
	res.render('index', {title: 'Home', uptime: uptime})
})

app.get('/anime', function (req, res) {
	anime.fetchUser("LordNature", function(error, response) {
		var api = response[0]
		var totalAnime = anime.minsToString(api.attributes.lifeSpentOnAnime)
		res.render('anime', { title: 'Anime List', api: api, totalAnime: totalAnime })
	});
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
