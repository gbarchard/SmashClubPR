var sortPoll = require('./sort-poll.js');
var roundPoll = require('./round-poll.js');

var formatPoll = function formatPoll(poll) {
	formattedPoll = ""
	sortedPoll = sortPoll(poll)
	roundedPoll = roundPoll(sortedPoll)

	return roundedPoll
}
module.exports = formatPoll;