const executeQuery = require('./execute-query')

const getSmashData = function getSmashData(id, callback) {

    const variables = {
        id: id
    }

    const query = `query TournamentQuery($id: ID) {
        tournaments(query: {
            filter: {
            id: $id
            }
        })
        {
            nodes {
                events {
                    sets(perPage: 200) {
                    nodes {
                        winnerId
            slots {
                entrant {
                    id
                }
            }
        }
    }
        standings(query: {perPage: 100}) {
            nodes {
            placement
            entrant {
                id
                participants {
                            gamerTag
                          }
                        }
                      }
                    }
                  }
                }
            }
            }`
         
    executeQuery(variables, query, function(data) {
        callback(data)
    })
    
    
}
module.exports = getSmashData;