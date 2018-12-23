var roundPoll = function roundPoll(poll) {
	let roundedPoll = []
	sortedPoll.forEach((record, index) => {
		record.unshift(index+1);
		let value = parseFloat(record[2]).toFixed(3)
		record[2] = value
		roundedPoll.push(record)
	});

	return roundedPoll
	
}
module.exports = roundPoll;