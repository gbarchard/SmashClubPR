var getPlayerNameById = require('./get-player-name-by-id.js');
var addNamesToMatches = function addNamesToMatches(matches,participants) {
    newMatches = []
	matches.forEach(match => {
        match.match.winner_name = getPlayerNameById(match.match.tournament_id,match.match.winner_id,participants)
        match.match.loser_name = getPlayerNameById(match.match.tournament_id,match.match.loser_id,participants)
        newMatches = newMatches.concat(match)
    });
    return newMatches
}
module.exports = addNamesToMatches;