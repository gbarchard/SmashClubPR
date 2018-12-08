var findTournaments = require('./sources/challonge/tournaments/list-tournaments.js');
var findTournamentMatches = require('./sources/challonge/tournaments/list-tournament-matches.js');
var findTournamentParticipants = require('./sources/challonge/participants/list-tournaments-participants.js');
var findAllParticipants = require('./functions/find-players-in-tournament.js');
var getColleyScores = require('./functions/get-colley-scores.js');
var createPoll = require('./functions/create-poll.js');
var addNamesToMatches = require('./functions/add-names-to-matches.js');


function runPoll(allMatches,allParticipants) {
    // console.log(addNamesToMatches(allMatches))
    allMatches = addNamesToMatches(allMatches,allParticipants)
    let allParticipantsNames = []
    allParticipantsNames = findAllParticipants(allMatches)
    let scores = getColleyScores(allMatches, allParticipantsNames)
    let poll = createPoll(allParticipantsNames, scores)

    console.log(poll)
}
findTournaments( function(tournaments, response) {
    var allMatches = []
    var itemsProcessed = 0
    tournaments.forEach((tournament, index, array) => {
        findTournamentMatches(tournament.tournament.id, function (tournament, response) {
            allMatches = allMatches.concat(tournament)
            itemsProcessed++
            if (itemsProcessed === array.length) {
                var allParticipants = []
                var tournamentsProcessed = 0
                tournaments.forEach((tournament, index, list) => {
                    findTournamentParticipants(tournament.tournament.id, function (participants, response) {
                        allParticipants = allParticipants.concat(participants)
                        tournamentsProcessed++
                        if (tournamentsProcessed === list.length) {
                            runPoll(allMatches,allParticipants)
                        }
                    })
                })
            }
        }); 
    })
})