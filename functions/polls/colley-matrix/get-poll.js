var findAllParticipants = require('./find-players-in-tournament.js');
var getColleyScores = require('./get-colley-scores/get-colley-scores.js');
var formatPoll = require('./format-poll-for-display/format-poll.js')
var addNamesToMatches = require('./add-names-to-matches.js');
var getDataForPoll = require('./get-data-for-poll/get-data-for-poll.js')

var getPoll = function getPoll(startDate,endDate,callback) {

	getDataForPoll(startDate,endDate,
		function (allMatches,allParticipants){
			allMatches = addNamesToMatches(allMatches,allParticipants)
			let allParticipantsNames = []
			allParticipantsNames = findAllParticipants(allMatches)
			let scores = getColleyScores(allMatches, allParticipantsNames)
			formattedPoll = formatPoll(scores)
			callback(formattedPoll,false)
		})
}

module.exports = getPoll;
