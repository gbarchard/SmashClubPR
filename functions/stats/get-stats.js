var getRank = require('./get-rank')
var getWinPercent = require('./get-win-percent')
var getPlacing = require('./get-placing')
var lowerCase = require('./to-lower-case')
var getDataForPoll = require('../polls/colley-matrix/get-data-for-poll/get-data-for-poll')

var getStats = function getStats(name,startDate,endDate,stats, callback) {
    
    name = lowerCase(name)
    
    getDataForPoll(startDate,endDate,function(allMatches,allParticipantsNames,error,allParticipants){
        
        getRank(name,startDate,endDate,function(rank,username,poll){
            if(rank === undefined) {
                callback({},true)
            }
            else {
                stats.rank = rank
                stats.name = username
                getWinPercent(name,startDate,endDate,function(wins,losses,percent){
                    stats.wins = wins
                    stats.losses = losses
                    stats.percent = percent
                
                    getPlacing(name,allMatches,allParticipantsNames,allParticipants,poll,function(avgFinish,tournamentsWon,bestFinish,tournamentsAttended,bestWinPlace,bestWinName){
                        stats.avgFinish = avgFinish
                        stats.tournamentsWon = tournamentsWon
                        stats.bestFinish = bestFinish
                        stats.tournamentsAttended = tournamentsAttended
                        stats.bestWinName = bestWinName
                        stats.bestWinPlace = bestWinPlace
                        callback(stats,false)
                    })
                })
            }
        })
    })
}
module.exports = getStats