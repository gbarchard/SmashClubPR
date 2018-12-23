var createPoll = function createPoll(players, scores) {
	let poll = []
	players.forEach(player => {
			poll.push([player, scores[0]])
			scores.shift()
	});

	return poll
}

module.exports = createPoll;


