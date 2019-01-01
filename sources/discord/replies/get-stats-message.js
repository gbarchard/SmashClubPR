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
            if (error === true) {
                callback("No stats found")                
            }
            else {
                console.log(stats)
                callback(stats.name + " is ranked " + stats.rank)
            }                                   
        })
    }           
}

module.exports = getStatsMessage;