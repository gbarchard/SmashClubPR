var sortText = require('./sort-text.js');
var alignText = require('./align-text.js');

var formatPoll = function formatPoll(poll) {
	formattedPoll = ""
	console.log(poll)
	sortedPoll = sortText(poll)
	formattedPoll = alignText(sortedPoll)

	return formattedPoll
}
module.exports = formatPoll;