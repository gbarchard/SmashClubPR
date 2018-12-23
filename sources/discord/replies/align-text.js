var alignText = function alignText(poll) {
	newPoll = []
	maxLengthOfName = 0
	poll.forEach(player =>  {
		if (player[1].length > maxLengthOfName) {
			maxLengthOfName = player[1].length
		}
	})

	poll.forEach(player => {
		player[0] = ' '.repeat(3-player[0].toString().length) + player[0];
		player[1] = player[1] + ' '.repeat(maxLengthOfName-player[1].toString().length);
		newPoll.push(player.join(' - '))
	});
	newPoll = newPoll.join('\n')

	return newPoll
}
module.exports = alignText;