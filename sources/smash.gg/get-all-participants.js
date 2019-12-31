var lowerCase = require('../../functions/stats/to-lower-case')

var getAllParticipants = function getAllParticipants(data) {
    
    let participants = []

    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            result.standings.nodes.forEach(standing => {
                participants.push(
                    {
                        "participant": {
                        "id": standing.entrant.id,
                        "name": lowerCase(standing.entrant.participants[0].gamerTag),
                        "display_name": lowerCase(standing.entrant.participants[0].gamerTag),
                        "final_rank": standing.placement
                        }
                    }
                )
            })
        })
    });
    return participants
};
module.exports = getAllParticipants