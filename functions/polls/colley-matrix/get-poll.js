var getPoll = function getPoll(startDate,endDate,callback) {

	var findTournaments = require('../../../sources/challonge/tournaments/list-tournaments.js');
	var findTournamentMatches = require('../../../sources/challonge/tournaments/list-tournament-matches.js');
	var findTournamentParticipants = require('../../../sources/challonge/participants/list-tournaments-participants.js');
	var findAllParticipants = require('./find-players-in-tournament.js');
	var getColleyScores = require('./get-colley-scores.js');
	var createPoll = require('./create-poll.js');
	var stringifyPoll = require('./stringify-poll.js')
	var addNamesToMatches = require('./add-names-to-matches.js');
	
	function runPoll(allMatches,allParticipants) {
			allMatches = addNamesToMatches(allMatches,allParticipants)
			let allParticipantsNames = []
			allParticipantsNames = findAllParticipants(allMatches)
			let scores = getColleyScores(allMatches, allParticipantsNames)
			let poll = createPoll(allParticipantsNames, scores)
			poll = stringifyPoll(poll)
			callback(poll,false)
	}
	findTournaments(startDate,endDate,function(tournaments,response) {
			if (tournaments.status === "500" || tournaments.length === 0) {
				callback("",true)
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
																runPoll(allMatches,allParticipants)
														}
												})
										})
								}
						}); 
				})
			}
	})
}

module.exports = getPoll;
