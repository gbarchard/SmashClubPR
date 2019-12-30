var getAllParticipantNames = function getAllParticipantNames(data) {
    
    let players = []

    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            result.standings.nodes.forEach(standing => {
                standing.entrant.participants.forEach(participant => {
                    if (players.indexOf(participant.gamerTag) === -1) {
                        players.push(participant.gamerTag)
                    }
                })
            })
        })
    });
    return players
};
module.exports = getAllParticipantNames