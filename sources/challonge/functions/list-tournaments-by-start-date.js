var findTournaments = require('../tournaments/list-tournaments.js');

var findTournamentsByStartDate = function findTournamentsByStartDate(startDate,endDate,callback,state) {
   
    findTournaments("2000-01-01","2100-01-01",function(tournaments,response) {
        console.log(startDate)
        console.log(endDate)
        var filteredTournaments = []
        tournaments.forEach(tournament => {
            var tournamentStartedAt = tournament.tournament.started_at.substring(0,10)
            if (tournamentStartedAt >= startDate && tournamentStartedAt <= endDate) {
                filteredTournaments.push(tournament)
            }
        });
        callback(filteredTournaments,response)    
    })
}
module.exports = findTournamentsByStartDate;