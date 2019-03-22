var lowerCase = require('./to-lower-case')

var getPlacing = function getPlacing(name,allMatches,allParticipantsNames,allParticipants,poll,callback) {
    var tournamentsAttended = 0
    var totalFinish = 0
    var tournamentsWon = 0
    var bestFinish = 1000
    var bestWinName = ""
    var bestWinPlace = 1000
        
    allParticipants.forEach(participant => {
        if ((name === lowerCase(participant.participant.name) || name === lowerCase(participant.participant.challonge_username)) && participant.participant.final_rank != null) {
            tournamentsAttended++
            totalFinish = totalFinish + participant.participant.final_rank
            if (participant.participant.final_rank === 1) {
                tournamentsWon++
            }
            if (participant.participant.final_rank < bestFinish){
                bestFinish = participant.participant.final_rank
            }
        }
    });
    var avgFinish = totalFinish / tournamentsAttended

    allMatches.forEach(match => {
        if (lowerCase(match.match.winner_name) === name) {
            poll.forEach(row => {
                if (match.match.loser_name === row[1]){
                    if (bestWinPlace > row[0]){
                        bestWinPlace = row[0]
                        bestWinName = match.match.loser_name
                    }
                }
            });
        }
    });
    callback(avgFinish,tournamentsWon,bestFinish,tournamentsAttended,bestWinPlace,bestWinName)
}
module.exports = getPlacing