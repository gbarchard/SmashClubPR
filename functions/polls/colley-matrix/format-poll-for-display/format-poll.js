var sortPoll = require('./sort-poll.js');
var roundPoll = require('./round-poll.js');
var alignText = require('./align-text.js');

var formatPoll = function formatPoll(poll) {
	formattedPoll = ""
	sortedPoll = sortPoll(poll)
	roundPoll = roundPoll(sortedPoll)
	formattedPoll = alignText(sortedPoll)

	return formattedPoll
}
module.exports = formatPoll;