var getTournamentIds = function getTournamentIds(startDate, endDate, callback) {
    const { GraphQLClient } = require('graphql-request')

        const { request } = require('graphql-request')
        
        const client = new GraphQLClient('https://api.smash.gg/gql/alpha', {
            headers: {
              Authorization: 'Bearer a68120018bf40f787da5320c32076f04',
            },
          })
        const variables = {
            afterDate: startDate,
            beforeDate: endDate,
            id: 183103
        }
        const query = `query TournamentQuery($afterDate: Timestamp, $beforeDate: Timestamp) {
            tournaments(query: {
                  filter: {
                    ownerId: "298058"
                    afterDate: $afterDate
                    beforeDate: $beforeDate
                  }
                }){
            nodes {
                  id
                }
            }
            }`
         
        client.request(query, variables).then(data => {
            callback(data)
        })
    
    
}
module.exports = getTournamentIds;