var getPollDateRange = function getPollDateRange(season,year) {
    
    function error() {
        startDate = null
        endDate = null
    }

    if (season === "spring") {
        if (isNaN(year) === false) {
            var startDate = year + "-01-01"
            var endDate = year + "-07-01"
        } 
        else {
            error()
        }
    }
    else if (season === "fall") {
        if (isNaN(year) === false) {
            var startDate = year + "-07-01"
            var endDate = year + "-12-31"
        }
        else {
            error()
        }
        
    }
    else {
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
    dates = [startDate,endDate]
    return dates
}
module.exports = getPollDateRange