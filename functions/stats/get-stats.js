var getRank = require('./get-rank')
var getWinPercent = require('./get-win-percent')
var getPlacing = require('./get-placing')

var getStats = function getStats(name,startDate,endDate,callback) {
    getRank(name,startDate,endDate,function(rank){
        if(rank === undefined) {
            callback({},true)
        }
        else {
            stats = {
                "name": name,
                "rank": rank
            }
            getWinPercent(name,startDate,endDate,function(wins,losses,percent){
                stats.wins = wins
                stats.losses = losses
                stats.percent = percent
            
                getPlacing(name,startDate,endDate,function(avgFinish,tournamentsWon,bestFinish){
                    stats.avgFinish = avgFinish
                    stats.tournamentsWon = tournamentsWon
                    stats.bestFinish = bestFinish
                    callback(stats,false)
                })
            })
        }
    })
}
module.exports = getStats