var getPollDateRange = require('./get-poll-date-range.js');
var getStats = require('../../../functions/stats/get-stats')
var ordinal = require('./number-ordinal')

var getStatsMessage = function getStatsMessage(message, callback) {
    var stats = {}
    var dates = getPollDateRange(message[message.length - 2],message[message.length - 1])
    var startDate = dates[0]
    var endDate = dates[1]
    if (startDate === null) {
        callback("Command not recognized. Type **!help** to see a list of commands")
    }

    else {
        var name = ""
        for (let index = 1; index < message.length; index++) {
            const element = message[index]
            if (element === "fall" || element === "spring") {
                break
            }
            name = name + " " + element
            name = name.trim()
        }
    
        getStats(name,startDate,endDate,stats,function(stats,error) {
            if (error === true) {
                callback("No stats found\n!stats <smash.gg username>\nstats will not appear until after attending (3) tournaments")    
            }
            else {
                callback("**" + stats.name + "**" +
                "\nRank: " + stats.rank +
                "\nRecord: " + stats.wins + " -- " + stats.losses + "     " + stats.percent + "%" +
                "\nTournaments Attended: " + stats.tournamentsAttended +
                "\nTournaments Won: " + stats.tournamentsWon +
                "\nAvg Finish: " + ordinal(Math.round(stats.avgFinish)) +
                "\nBest Finish: " + ordinal(stats.bestFinish) +
                "\nBest Win: **" + stats.bestWinName + "** who is ranked " + ordinal(stats.bestWinPlace)
                )
            }                                   
        })
    }           
}

module.exports = getStatsMessage;