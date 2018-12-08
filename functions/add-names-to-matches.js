var getPlayerNameById = require('./get-player-name-by-id.js');
var addNamesToMatches = function addNamesToMatches(matches,participants) {
    newMatches = []
	matches.forEach(match => {
        match.match.winner_name = getPlayerNameById(match.match.tournament_id,match.match.winner_id,participants)
        // console.log("winner below")
        // console.log(getPlayerNameById(match.match.tournament_id,match.match.winner_id,participants))
        // console.log("winner above")
        match.match.loser_name = getPlayerNameById(match.match.tournament_id,match.match.loser_id,participants)
        newMatches = newMatches.concat(match)
        // console.log("loser below")
        // console.log(getPlayerNameById(match.match.tournament_id,match.match.loser_id,participants))
        // console.log("loser above")

    });
    return newMatches
}
module.exports = addNamesToMatches;