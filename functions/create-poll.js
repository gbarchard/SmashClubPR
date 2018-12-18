var createPoll = function createPoll(players, scores) {
	let poll = []
	players.forEach(player => {
			poll.push([player, scores[0]])
			scores.shift()
	});
	
	function compareSecondColumn(b, a) {
		if (a[1] === b[1]) {
				return 0;
		}
		else {
				return (a[1] < b[1]) ? -1 : 1;
		}
	}	
	poll = poll.sort(compareSecondColumn);
	let rankings = []
	poll.forEach((record, index) => {
		record.unshift(index+1);
		let value = parseFloat(record[2]).toFixed(3)
		record[2] = value
		console.log(record)
		rankings.push(record)
	});
	return rankings
}

module.exports = createPoll;


