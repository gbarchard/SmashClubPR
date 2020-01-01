const executeQuery = require('./execute-query')

const getNextTournamentURL = function getNextTournamentURL(callback) {
    
    const variables = {
        afterDate: Math.floor(Date.now() / 1000),
    }
    
    const query = `query TournamentQuery {
        tournaments(query: {
          filter: {
            ownerId: "298058",
            afterDate: afterDate
          },
          sortBy: "startAt asc"
        }){
          nodes {
            url(relative: false)
          }
        }
      }`
         
    executeQuery(variables, query, function(data) {
        callback(data)
    })
    
    
}
module.exports = getNextTournamentURL;