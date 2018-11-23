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
	return poll.sort(compareSecondColumn);
}

module.exports = createPoll;


