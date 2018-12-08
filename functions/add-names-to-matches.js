var addNamesToMatches = function addNamesToMatches(matches) {
    newMatches = []
	matches.forEach(match => {
        match.match.winner_name = "bob"
        match.match.loser_name = "joe"
        newMatches = newMatches.concat(match)
    });
    return newMatches
}
module.exports = addNamesToMatches;