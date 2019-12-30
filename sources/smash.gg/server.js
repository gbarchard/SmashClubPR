var getTournamentIds = require('./get-tournament-ids')
var getResultsInMatches = require('./get-results-in-matches')

var getSmashData = function getSmashData(startDate, endDate, callback) {
    
    var nodes = []
    itemsProcessed = 0
    getTournamentIds(startDate,endDate,function(ids){
        ids.tournaments.nodes.forEach(id => {
            getResultsInMatches(id.id,function(data) {
                nodes = nodes.concat(data.tournaments.nodes)
                itemsProcessed++
                if(itemsProcessed === ids.tournaments.nodes.length) {
                    var allData = {
                        tournaments: {
                            nodes: nodes
                        }
                    }
                    callback(allData)
                }
            })

        })
    }); 
}
module.exports = getSmashData;