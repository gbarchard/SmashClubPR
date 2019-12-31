const executeQuery = require('./execute-query')

const getTournamentIds = function getTournamentIds(startDate, endDate, callback) {
    
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
                url(relative: false)
                startAt      
            }
        }
        }`
         
    executeQuery(variables, query, function(data) {
        callback(data)
    })
    
    
}
module.exports = getTournamentIds;