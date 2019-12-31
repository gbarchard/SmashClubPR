var getTournamentIds = require('./queries/get-tournament-ids')
var getResultsInMatches = require('./queries/get-results-in-matches')

var getSmashData = function getSmashData(startDate, endDate, callback) {
    
    var nodes = []
    itemsProcessed = 0
    getTournamentIds(startDate,endDate,function(ids){
        if (ids.tournaments.nodes != null ) {
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
        }
        else {
            callback({}, true)
        }
            }); 
}
module.exports = getSmashData;