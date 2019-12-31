var min3Tournaments = function min3Tournaments(players, poll) {
    var eligiblePlayers = []
    var eligiblePoll = []
    players.forEach((player, index) => {
        if(player[1] > 2) {
            eligiblePlayers.push(player[0])
            eligiblePoll.push(poll[index])
        }
    });
    return [eligiblePlayers, eligiblePoll]
}
module.exports = min3Tournaments;