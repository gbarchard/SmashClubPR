var sortText = function sortText(poll) {
	let sortedPoll = []

	function compareSecondColumn(b, a) {
		if (a[1] === b[1]) {
				return 0;
		}
		else {
				return (a[1] < b[1]) ? -1 : 1;
		}
	}	
	sortedPoll = poll.sort(compareSecondColumn);

	return sortedPoll
}
module.exports = sortText;