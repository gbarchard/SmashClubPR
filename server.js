let Colley = require('colley-rankings');

var listTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');

let players = []

listTournamentMatches(5244080, function (tournament, response) {
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

    let scores = (C.solve().array)
    let poll = []
    players.forEach(player => {
        poll.push([player, scores[0]])
        scores.shift()
    });

    poll.sort(compareSecondColumn);

    function compareSecondColumn(b, a) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }

    console.log(poll)
})
