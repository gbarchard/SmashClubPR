var alignText = function alignText(poll) {
	newPoll = []
	poll.forEach(player => {
		player[0] = ' '.repeat(3-player[0].toString().length) + player[0];
		newPoll.push(player.join(' - '))
	});
	newPoll = newPoll.join('\n')

	return newPoll
}
module.exports = alignText;