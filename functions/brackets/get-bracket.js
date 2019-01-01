var findTournaments = require('../../sources/challonge/tournaments/list-tournaments.js');

var getBracket = function getBracket(callback) {
    findTournaments("2000-01-01","2100-01-01",function(tournaments,response) {
        var x = 0
        tournaments.reverse()
        tournaments.forEach(tournament => {
            if ((tournament.tournament.state === "underway" && x === 0) || (tournament.tournament.state === "awaiting_review" && x === 0)) {
                callback(tournament.tournament.full_challonge_url)
                x = x + 1
            }
            else if (tournament.tournament.state === "complete" && x === 0) {
                callback("No tournaments live. Here is the previous bracket\n" + tournament.tournament.full_challonge_url)
                x = x + 1
    
            }
        });
        if (x === 0) {
            callback("No tournaments yet")
        }
    })
}
module.exports = getBracket