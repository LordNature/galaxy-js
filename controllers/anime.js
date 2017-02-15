// Anime.pug javascript
function minsToString(mins)
{
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

module.exports = { minsToString }

/*
var unirest = require('unirest')
var api = unirest.get('https://kitsu.io/api/edge/users/41416')
                  .headers({'Accept': 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json'})
                  .end(function (response) {
                    // i officially hate callbacks
                    return response
                  })
*/
