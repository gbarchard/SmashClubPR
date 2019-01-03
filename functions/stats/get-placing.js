var getDataForPoll = require('../polls/colley-matrix/get-data-for-poll/get-data-for-poll')

var getPlacing = function getPlacing(name,startDate,endDate,callback) {
    var tournamentsAttended = 0
    var totalFinish = 0
    var tournamentsWon = 0
    var bestFinish = 1000
    getDataForPoll(startDate,endDate,function(allMatches,allParticipantsNames,error,allParticipants){
        allParticipants.forEach(participant => {
            if (name === participant.participant.name || name === participant.participant.challonge_username) {
                tournamentsAttended++
                totalFinish = totalFinish + participant.participant.final_rank
                if (participant.participant.final_rank === 1) {
                    tournamentsWon++
                }
                if (participant.participant.final_rank << bestFinish){
                    bestFinish = participant.participant.final_rank
                }
            }
        });
        var avgFinish = totalFinish / tournamentsAttended
        console.log(tournamentsWon)
        callback(avgFinish,tournamentsWon,bestFinish)
    })
}
module.exports = getPlacing