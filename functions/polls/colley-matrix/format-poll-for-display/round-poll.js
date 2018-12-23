var roundPoll = function roundPoll(poll) {
	let rankings = []
	sortedPoll.forEach((record, index) => {
		record.unshift(index+1);
		let value = parseFloat(record[2]).toFixed(3)
		record[2] = value
		rankings.push(record)
	});
	
}
module.exports = roundPoll;