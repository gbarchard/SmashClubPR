
var findTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');
var findTournaments = require('./sources/challonge/tournaments/list-tournaments.js');
var findPlayersInTournament = require('./functions/find-players-in-tournament.js');
var getColleyScores = require('./functions/get-colley-scores.js');
var createPoll = require('./functions/create-poll.js');

findTournaments( function(tournaments, response) {
    findTournamentMatches(tournaments[0].tournament.id, function (tournament, response) { //need for each here
        let tournamentPlayers = findPlayersInTournament(tournament)
        let scores = getColleyScores(tournament, tournamentPlayers)
        let poll = createPoll(tournamentPlayers, scores)
        console.log(poll)
    })
})

