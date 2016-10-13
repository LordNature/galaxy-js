/* Hummingbird API
 * Desc: This script utilizes the Hummingbird API to fetch certain variables to display on the website, galaxy.moe.
 */

var request = require('request'),
	apiURL = 'https://hummingbird.me/api/v1',
	profileURL = apiURL + '/users/{username}',
	libraryURL = profileURL + '/library/';

