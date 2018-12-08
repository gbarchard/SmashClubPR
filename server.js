
var findTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');
var findTournaments = require('./sources/challonge/tournaments/list-tournaments.js');
var findPlayersInTournament = require('./functions/find-players-in-tournament.js');
var getColleyScores = require('./functions/get-colley-scores.js');
var createPoll = require('./functions/create-poll.js');
var addNamesToMatches = require('./functions/add-names-to-matches.js');

function runPoll(allMatches) {
    // console.log(addNamesToMatches(allMatches))
    allMatches = addNamesToMatches(allMatches)
    let allPlayers = []
    allPlayers = findPlayersInTournament(allMatches)
    let scores = getColleyScores(allMatches, allPlayers)
    let poll = createPoll(allPlayers, scores)

    console.log(poll)
}
findTournaments( function(tournaments, response) {
    var allMatches = []
    var itemsProcessed = 0
    tournaments.forEach((tournament, index, array) => {
        findTournamentMatches(tournament.tournament.id, function (tournament, response) { //need for each here
            allMatches = allMatches.concat(tournament)
            itemsProcessed++
            if (itemsProcessed === array.length) {
                runPoll(allMatches)
            }
        }); 
    })
})