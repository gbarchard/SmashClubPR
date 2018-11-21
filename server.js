let Colley = require('colley-rankings');

let Client = require('node-rest-client').Client; 
let client = new Client();

let players = []
 
var args = {
    path: {"id":5244080},
    parameters: {
        api_key:"xiKFnmcpkDk8n8Ih2Sq0yTaLcHPksCQZHA8NJW7a",
        state:"complete"
    } 
}

client.get("https://api.challonge.com/v1/tournaments/${id}/matches.json", args, function (tournament, response) {
    
    tournament.forEach(match => {

        var winner = match.match.winner_id
        var loser = match.match.loser_id
        if (players.indexOf(winner) === -1) {
            players.push(winner)
        }
        if (players.indexOf(loser) === -1) {
            players.push(loser)
        }
    });
    
    let C = Colley(players.length); // Create a n-person league
    
    tournament.forEach(match => {
        winner_id = players.indexOf(match.match.winner_id)
        loser_id = players.indexOf(match.match.loser_id)
        C.addGame(winner_id, loser_id);
    });
    console.log(C.solve());
    console.log(players)
    console.log(C.getRatings())
});