var alignText = function alignText(poll) {
	newPoll = []


	poll.forEach(player => {
		player[0] = ' '.repeat(2-player[0].toString().length) + player[0];
		player[3] = player[2]
		player[2] = player[1]
		player[1] = player[3]
		player.splice(3)
		newPoll.push(player.join('|'))
		
	});
	newPoll = newPoll.join('\n')

	return newPoll
}
module.exports = alignText;