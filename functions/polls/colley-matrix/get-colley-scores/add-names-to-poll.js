var addNamesToPoll = function addNamesToPoll(players, scores) {
	let poll = []
	players.forEach(player => {
			poll.push([player, scores[0]])
			scores.shift()
	});

	return poll
}

module.exports = addNamesToPoll;