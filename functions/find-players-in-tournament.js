var participantList = require('../sources/challonge/participants/list-tournaments-participants.js');

var findPlayersInTournament = function findPlayersInTournament(matches) {
	let players = []
	// find players names for a tournament
	matches.forEach(match => {
		var winner = match.match.winner_name
		var loser = match.match.loser_name
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