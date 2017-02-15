// Anime.pug javascript
var request = require('request')

function minsToString(mins) {
   var array = {
		 	 "year": 24*60*365,
		   "month": 24*60*30,
       "day": 24*60,
       "hour": 1*60,
       "minute": 1
   }
   var result = []
   for(var name in array) {
     var p =  Math.floor(mins/array[name]);
     if(p == 0) result.push();
     if(p == 1) result.push(" " + p + " " + name);
     if(p >= 2) result.push(" " + p + " " + name + "s");
     mins %= array[name]
   }
   return result;
}

// Let's get rid of that dependency! [Unirest has fainted.]
fetchUser = function(username, callback) {
  request({
    method: 'GET',
    url: 'https://kitsu.io/api/edge/users?filter[name]=' + username,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  }, function(error, response, body) {
    if (error) {
      callback(error)
    }
    var response = JSON.parse(body).data
    callback(null, response)
  })
}


/* Did I mention how much I hate asynchronous computiting?
Makes my life difficult when I try to grab a variable from the scope of a function
var unirest = require('unirest')
var api = unirest.get('https://kitsu.io/api/edge/users/41416')
                  .headers({'Accept': 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json'})
                  .end(function (response) {
                    // i officially hate callbacks
                    return response
                  })
fetchLibrary = function(username, callback) {
  request({
    method: 'GET',
    url: 'https://kitsu.io/api/edge/users/41416/library-entries?filter[status]=current',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  }, function(error, response, body) {
    if (error) {
      callback(error)
    }
    var response = JSON.parse(body).data
    callback(null, response)
  })
}*/

module.exports = { minsToString, fetchUser }
