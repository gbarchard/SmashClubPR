var findTournaments = require('../../sources/challonge/tournaments/list-tournaments.js');

var getSignup = function getSignup(callback) {
    var x = 0
    findTournaments("2000-01-01","2100-01-01",function(tournaments,response) {
        tournaments.forEach(tournament => {
            if (tournament.tournament.state === "pending") {
                callback(tournament.tournament.full_challonge_url)
                x = x + 1
            }
        });
        if (x === 0) {
            callback("No upcoming tournaments")

        }
    })
}
module.exports = getSignup