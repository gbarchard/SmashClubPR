
var findTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');
var findPlayersInTournament = require('./functions/find-players-in-tournament.js');
var getColleyScores = require('./functions/get-colley-scores.js');
var createPoll = require('./functions/create-poll.js');


findTournamentMatches(5244080, function (tournament, response) {
    let tournamentPlayers = findPlayersInTournament(tournament)
    let scores = getColleyScores(tournament, tournamentPlayers)
    let poll = createPoll(tournamentPlayers, scores)
    console.log(poll)
})
