var lowerCase = require('../../functions/stats/to-lower-case')

var getAllParticipantNames = function getAllParticipantNames(data) {
    let players = []
    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            result.standings.nodes.forEach(standing => {
                var foundIt = false
                standing.entrant.participants.forEach(participant => {
                    var playersIndex = -1
                    players.forEach((player, index) => {
                        if (lowerCase(player[0]) === lowerCase(participant.gamerTag)) {
                            foundIt = true
                            playersIndex = index
                        }
                    })
                    if (foundIt === false) {
                        players.push([lowerCase(participant.gamerTag),1])
                    }
                    else {
                        players[playersIndex][1]++
                    }
                })
            })
        })
    });
    return players
};
module.exports = getAllParticipantNames