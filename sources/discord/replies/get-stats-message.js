var getPollDateRange = require('./get-poll-date-range.js');
var getStats = require('../../../functions/stats/get-stats')
var ordinal = require('./number-ordinal')

var getStatsMessage = function getStatsMessage(message, callback) {
    var dates = getPollDateRange(message[2],message[3])
    var startDate = dates[0]
    var endDate = dates[1]
    if (startDate === null) {
        callback("Command not recognized. Type **!help** to see a list of commands")
    }
    else {
        getStats(message[1],startDate,endDate,function(stats,error) {
            if (error === true) {
                callback("No stats found")    
            }
            else {
                callback("**" + stats.name + "**" +
                "\nRank: " + stats.rank +
                "\nRecord: " + stats.wins + " -- " + stats.losses + "     " + stats.percent + "%" +
                "\nTournaments Won: " + stats.tournamentsWon +
                "\nAvg Finish: " + ordinal(Math.round(stats.avgFinish)) +
                "\nBest Finish: " + ordinal(stats.bestFinish)
                )
            }                                   
        })
    }           
}

module.exports = getStatsMessage;