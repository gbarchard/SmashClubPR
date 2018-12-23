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
	let rankings = []
	sortedPoll.forEach((record, index) => {
		record.unshift(index+1);
		let value = parseFloat(record[2]).toFixed(3)
		record[2] = value
		rankings.push(record)
	});
	return rankings
}
module.exports = sortText;