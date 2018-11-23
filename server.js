
var findTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');
var findTournaments = require('./sources/challonge/tournaments/list-tournaments.js');
var findPlayersInTournament = require('./functions/find-players-in-tournament.js');
var getColleyScores = require('./functions/get-colley-scores.js');
var createPoll = require('./functions/create-poll.js');

function runPoll(allMatches) {
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

//https://stackoverflow.com/questions/18983138/callback-after-all-asynchronous-foreach-callbacks-are-completed