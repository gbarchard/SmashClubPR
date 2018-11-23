var findTournaments = function findTournaments(callback) {
	let Client = require('node-rest-client').Client; 
	let client = new Client();
	
	const config = require("../config.json");

	var args = {
			path: {
					"baseURL": "https://api.challonge.com",
					"apiVersion": "v1",
					"method": "tournaments",
					"format": "json"
			},
			parameters: {
					api_key: config.api_key,
			} 
	}

	client.get("${baseURL}/${apiVersion}/${method}.${format}", args, callback)
}

module.exports = findTournaments;