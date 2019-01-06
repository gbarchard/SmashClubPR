var getPoll = require('../polls/colley-matrix/get-poll')

var getRank = function getRank(name,startDate,endDate,callback) {
    var rank = 0
    getPoll(startDate,endDate,function(poll,error){
        if(poll === "") {
            callback()
        }
        else {
            poll.forEach(player => {
                if (name === player[1]) {
                    rank = player[0]
                }
            });
            if(rank != 0){
                callback(rank)
            }
            else
                callback()
        }   
    }) 
}
module.exports = getRank