var getAllParticipants = function getAllParticipants(data) {
    
    let participants = []

    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            result.standings.nodes.forEach(standing => {
                participants.push(
                    {
                        "participant": {
                        "id": standing.entrant.id,
                        "name": standing.entrant.participants[0].gamerTag,
                        "display_name": standing.entrant.participants[0].gamerTag,
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