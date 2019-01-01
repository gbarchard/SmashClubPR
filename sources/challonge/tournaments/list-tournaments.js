var findTournaments = function findTournaments(startDate,endDate,callback,state) {
	let Client = require('node-rest-client').Client; 
	let client = new Client();
	
	var args = {
			path: {
					"baseURL": "https://api.challonge.com",
					"apiVersion": "v1",
					"method": "tournaments",
					"format": "json"
			},
			parameters: {
					api_key: process.env.challonge_api_key,
					subdomain: process.env.challonge_subdomain
			} 
	}

	client.get("${baseURL}/${apiVersion}/${method}.${format}", args, callback)
}
module.exports = findTournaments;