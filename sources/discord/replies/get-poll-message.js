var getPoll = require('../../../functions/polls/colley-matrix/get-poll.js');
var getPollDateRange = require('./get-poll-date-range.js');
var alignTextforPoll = require('./align-text.js');


var getPollMessage = function getPollMessage(message, callback) {
    var dates = getPollDateRange(message)
    var startDate = dates[0]
    var endDate = dates[1]
    if (startDate === null) {
        callback("Command not recognized. Type **!help** to see a list of commands")
    }
    else {
        getPoll(startDate,endDate,function(poll,error) {
            if (error === true) {
                callback("No tournaments found")                
            }
            else {
                alignedPoll = alignTextforPoll(poll)
                callback("```" + alignedPoll + "```")
            }                                   
        })
    }           
}

module.exports = getPollMessage;