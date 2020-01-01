var lowerCase = require('../../functions/stats/to-lower-case')

var getAllMatches = function getAllMatches(data,participants) {
    
    let matches = []
    var tournamentCount = 0
    var setCount = 0
    
    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            tournamentCount++
            result.sets.nodes.forEach(set => {
                setCount++
                var winner_name = ""
                var loser_name = ""
                if(set.displayScore != "DQ") {
 
                if (set.slots[0].entrant.id === set.winnerId) {
                    participants.forEach(participant => {
                        if(participant.participant.id == set.slots[0].entrant.id) {
                            winner_name = participant.participant.name
                        }
                    })
                }
                else {
                    participants.forEach(participant => {
                        if(participant.participant.id === set.slots[0].entrant.id) {
                            loser_name = participant.participant.name

                        }
                    })
                }

                if (set.slots[1].entrant.id === set.winnerId) {
                    participants.forEach(participant => {
                        if(participant.participant.id == set.slots[1].entrant.id) {
                            winner_name = participant.participant.name

                        }
                    })                }
                else {
                    participants.forEach(participant => {
                        if(participant.participant.id === set.slots[1].entrant.id) {
                            loser_name = participant.participant.name
                        }
                    })
                }
                if(winner_name != "" && loser_name != "") {
                    matches.push(
                        {
                        "match": {
                            "winner_name": lowerCase(winner_name),
                            "loser_name": lowerCase(loser_name)
                            }
                        }
                    )
                }}
            })
        })
    });
    return matches
};
module.exports = getAllMatches