var getPollDateRange = require('./get-poll-date-range.js');
var getStats = require('../../../functions/stats/get-stats')

var getStatsMessage = function getStatsMessage(message, callback) {
    var dates = getPollDateRange(message[2],message[3])
    var startDate = dates[0]
    var endDate = dates[1]
    if (startDate === null) {
        callback("Command not recognized. Type **!help** to see a list of commands")
    }
    else {
        getStats(message[1],startDate,endDate,function(stats,error) {
            console.log("got here")
            if (error === true) {
                callback("No stats found")    
            }
            else {
                callback("**" + stats.name + "**" +
                "\nRank: " + stats.rank +
                "\nWins: " + stats.wins + 
                "\nLosses: " + stats.losses +
                "\nPercent: " + stats.percent +"%"
                )
            }                                   
        })
    }           
}

module.exports = getStatsMessage;