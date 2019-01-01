var getRank = require('./get-rank')
var getWinPercent = require('./get-win-percent')

var getStats = function getStats(name,startDate,endDate,callback) {
    console.log("got stats")
    getRank(name,startDate,endDate,function(rank){
        console.log("got rank")
        if(rank === undefined) {
            callback({},true)
        }
        else {
            stats = {
                "name": name,
                "rank": rank
            }
            getWinPercent(name,startDate,endDate,function(wins,losses,percent){
                console.log("got win percent")
                stats.wins = wins
                stats.losses = losses
                stats.percent = percent
                callback(stats,false)
            })
        }
    })
}
module.exports = getStats