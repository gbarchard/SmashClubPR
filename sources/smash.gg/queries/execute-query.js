var executeQuery = function executeQuery(variables, query, callback) {
    const { GraphQLClient } = require('graphql-request')

    const { request } = require('graphql-request')
    
    const client = new GraphQLClient('https://api.smash.gg/gql/alpha', {
        headers: {
            Authorization: 'Bearer ' + process.env.smashgg_api_key
        },
    })
    client.request(query, variables).then(data => {            
        callback(data)
    })

}
module.exports = executeQuery;