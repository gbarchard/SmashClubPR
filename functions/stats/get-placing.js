var getDataForPoll = require('../polls/colley-matrix/get-data-for-poll/get-data-for-poll')
var lowerCase = require('./to-lower-case')

var getPlacing = function getPlacing(name,startDate,endDate,callback) {
    var tournamentsAttended = 0
    var totalFinish = 0
    var tournamentsWon = 0
    var bestFinish = 1000
    getDataForPoll(startDate,endDate,function(allMatches,allParticipantsNames,error,allParticipants){
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
        callback(avgFinish,tournamentsWon,bestFinish,tournamentsAttended)
    })
}
module.exports = getPlacing