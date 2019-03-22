var getRank = require('./get-rank')
var getWinPercent = require('./get-win-percent')
var getPlacing = require('./get-placing')
var lowerCase = require('./to-lower-case')

var getStats = function getStats(name,startDate,endDate,stats, callback) {
    
    name = lowerCase(name)
   
    getRank(name,startDate,endDate,function(rank,username){
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
            
                getPlacing(name,startDate,endDate,function(avgFinish,tournamentsWon,bestFinish,tournamentsAttended){
                    stats.avgFinish = avgFinish
                    stats.tournamentsWon = tournamentsWon
                    stats.bestFinish = bestFinish
                    stats.tournamentsAttended = tournamentsAttended
                    callback(stats,false)
                })
            })
        }
    })
}
module.exports = getStats