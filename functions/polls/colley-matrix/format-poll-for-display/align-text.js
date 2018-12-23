var alignText = function alignText(poll) {
	newPoll = []
	poll.forEach(player => {
		newPoll.push(player.join(' - '))
	});
	newPoll = newPoll.join('\n')
	console.log(newPoll)

	return newPoll
}
module.exports = alignText;