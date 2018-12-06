var findPlayersInTournament = function findPlayersInTournament(tournament) {
	let players = []
	tournament.forEach(match => {
		var winner = match.match.winner_id
		var loser = match.match.loser_id
		var tournamentId = match.match.tournament_id
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