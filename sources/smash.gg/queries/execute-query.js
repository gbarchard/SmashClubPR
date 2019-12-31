var executeQuery = function executeQuery(variables, query, callback) {
    const { GraphQLClient } = require('graphql-request')

    const { request } = require('graphql-request')
    
    const client = new GraphQLClient('https://api.smash.gg/gql/alpha', {
        headers: {
            Authorization: 'Bearer a68120018bf40f787da5320c32076f04',
        },
    })

    client.request(query, variables).then(data => {            
        callback(data)
    })

}
module.exports = executeQuery;