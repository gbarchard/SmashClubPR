var getSmashData = function getSmashData(startDate, endDate, callback) {
    const { GraphQLClient } = require('graphql-request')

        console.log(startDate)
        console.log(endDate)
        
        const { request } = require('graphql-request')
        
        const client = new GraphQLClient('https://api.smash.gg/gql/alpha', {
            headers: {
              Authorization: 'Bearer ',
            },
          })
        const variables = {
            afterDate: 1561939200,
            beforeDate: 1577750400,
            id: 183103
        }
        const query = `query TournamentQuery($afterDate: Timestamp, $beforeDate: Timestamp, $id: ID) {
            tournaments(query: {
                  filter: {
                    ownerId: "298058"
                    afterDate: $afterDate
                    beforeDate: $beforeDate
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