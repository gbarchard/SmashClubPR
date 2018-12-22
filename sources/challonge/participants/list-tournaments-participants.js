var findTournamentParticipants = function findTournamentParticipants(tournamentID, callback) {
    let Client = require('node-rest-client').Client; 
    let client = new Client();
    
    var args = {
        path: {
            "id": tournamentID,
            "baseURL": "https://api.challonge.com",
            "apiVersion": "v1",
            "method": "tournaments",
            "object": "participants",
            "format": "json"
        },
        parameters: {
            api_key: process.env.challonge_api_key
        } 
    }

    client.get("${baseURL}/${apiVersion}/${method}/${id}/${object}.${format}", args, callback)
}

module.exports = findTournamentParticipants;