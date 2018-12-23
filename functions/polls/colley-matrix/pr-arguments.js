var prArguments = function prArguments(message) {
    
    function error() {
        startDate = null
        endDate = null
    }

    if (message[1] === "spring") {
        if (isNaN(message[2]) === false) {
            var startDate = message[2] + "-01-01"
            var endDate = message[2] + "-07-01"
        } 
        else {
            error()
        }
    }
    else if (message[1] === "fall") {
        if (isNaN(message[2]) === false) {
            var startDate = message[2] + "-07-01"
            var endDate = message[2] + "-12-31"
        }
        else {
            error()
        }
        
    }
    else if (message[1] === undefined) {
        var today = new Date()
        if (today.getMonth() < 7){
            var startDate = today.getFullYear() + "-01-01"
            var endDate = today.getFullYear() + "-07-01"
        }
        else {
            var startDate = today.getFullYear() + "-07-01"
            var endDate = today.getFullYear() + "-12-31"
        }
    }
    else {
        error()
    } 
    dates = [startDate,endDate]
    return dates
}
module.exports = prArguments