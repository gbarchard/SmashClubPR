var getSmashData = function getSmashData(id, callback) {
    const { GraphQLClient } = require('graphql-request')

        const { request } = require('graphql-request')
        
        const client = new GraphQLClient('https://api.smash.gg/gql/alpha', {
            headers: {
              Authorization: 'Bearer a68120018bf40f787da5320c32076f04',
            },
          })
        const variables = {
            id: id
        }
        const query = `query TournamentQuery($id: ID) {
            tournaments(query: {
                  filter: {
                    id: $id
                  }
                }){
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
                    standings(query: {}) {
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
         
        client.request(query, variables).then(data => {
            
            callback(data)
        })
    
    
}
module.exports = getSmashData;