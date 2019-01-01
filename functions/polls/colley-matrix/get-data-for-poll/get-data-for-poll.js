var findTournaments = require('../../../../sources/challonge/functions/list-tournaments-by-start-date.js');
var findTournamentMatches = require('../../../../sources/challonge/tournaments/list-tournament-matches.js');
var findTournamentParticipants = require('../../../../sources/challonge/participants/list-tournaments-participants.js');
var findAllParticipants = require('./find-players-in-tournament.js');
var addNamesToMatches = require('./add-names-to-matches.js');


var getDataForPoll = function getDataForPoll(startDate, endDate, callback) {
	findTournaments(startDate,endDate,function(tournaments,response) {
		if (tournaments.status === "500" || tournaments.length === 0) {
			callback([],[],true)
		}
		else {
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
									allMatches = addNamesToMatches(allMatches,allParticipants)
									let allParticipantsNames = []
									allParticipantsNames = findAllParticipants(allMatches)
									callback(allMatches,allParticipantsNames)
								}
							})
						})
					}
				}); 
			})
		}
})
}

module.exports = getDataForPoll;


