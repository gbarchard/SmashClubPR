var findPlayersInTournament = function findPlayersInTournament(matches) {
	let players = []
	matches.forEach(match => {
		var winner = match.match.winner_name
		var loser = match.match.loser_name
		if (players.indexOf(winner) === -1) {
			players.push(winner)
		}
		if (players.indexOf(loser) === -1) {
			players.push(loser)
		}
	});
	return players
}

module.exports = findPlayersInTournament;