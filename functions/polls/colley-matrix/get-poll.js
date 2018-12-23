var getColleyScores = require('./get-colley-scores/get-colley-scores.js');
var formatPoll = require('./format-poll-for-display/format-poll.js')
var getDataForPoll = require('./get-data-for-poll/get-data-for-poll.js')

var getPoll = function getPoll(startDate,endDate,callback) {

	getDataForPoll(startDate,endDate,
		function (allMatches,allParticipantsNames){
			let scores = getColleyScores(allMatches, allParticipantsNames)
			formattedPoll = formatPoll(scores)
			callback(formattedPoll,false)
		})
}

module.exports = getPoll;
