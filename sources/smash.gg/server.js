var getTournamentIds = require('./queries/get-tournament-ids')
var getResultsInMatches = require('./queries/get-results-in-matches')
const NodeCache = require( "node-cache" );

const dataCache = new NodeCache();

var getSmashData = function getSmashData(startDate, endDate, callback) {
    
    value = dataCache.get(startDate + "" + endDate);
    if ( value == undefined ){
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
                            dataCache.set(startDate + "" + endDate, allData, 60)
                            console.log("got data from smash.gg")
                            callback(allData)
                        }
                    })
        
                })    
            }
            else {
                console.log("got an error from smash.gg")
                callback({}, true)
            }
        });
    }
    else {
        console.log("got data from cache")
        callback(value)
    }  
     
}
module.exports = getSmashData;