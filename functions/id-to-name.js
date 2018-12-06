var idToName = function idToName(poll) {
	var findTournamentParticipants = require('../sources/challonge/participants/list-tournaments-participants.js')
    var findTournaments = require('../sources/challonge/tournaments/list-tournaments.js');
    findTournaments( function(tournaments, response) {
    poll.forEach(playerRanking => {
        playerRanking = playerRanking[0]

    });
	})
}
module.exports = idToName;