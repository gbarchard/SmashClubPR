var getPoll = require('../polls/colley-matrix/get-poll')
var getPollDateRange = require('../../sources/discord/replies/get-poll-date-range');

var getStats = function getStats(name,startDate,endDate,callback) {
    
    getPoll(startDate,endDate,function(poll,error){
        poll.forEach(player => {
            if (name === player[1]) {
                var stats = {
                    "name": name,
                    "rank": player[0]
                }
                callback(stats)
            }
        });
    }) 
}
module.exports = getStats