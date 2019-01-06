var getDataForPoll = require('../polls/colley-matrix/get-data-for-poll/get-data-for-poll')

var getWinPercent = function getWinPercent(name,startDate,endDate,callback) {
    var wins = 0
    var losses = 0
    var percent = 0
    getDataForPoll(startDate,endDate,function(allMatches,allParticipantNames){
        allMatches.forEach(match => {
            if(name === match.match.winner_name){
                wins++
            }
            else if (name === match.match.loser_name){
                losses++
            }
        });
        if (wins + losses != 0){
            percent = Math.round((wins / (wins + losses))*100)
        }
        callback(wins,losses,percent)
    })
}
module.exports = getWinPercent