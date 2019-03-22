var getPoll = require('../polls/colley-matrix/get-poll')
var lowerCase = require('./to-lower-case')

var getRank = function getRank(name,startDate,endDate,callback) {
    var rank = 0
    getPoll(startDate,endDate,function(poll,error){
        if(poll === "") {
            callback()
        }
        else {
            username = ""
            poll.forEach(player => {
                if (name === lowerCase(player[1])) {
                    rank = player[0]
                    username = player[1]
                }
            });
            if(rank != 0){
                callback(rank,username,poll)
            }
            else
                callback()
        }   
    }) 
}
module.exports = getRank