var getPlayerNameById = function getPlayerNameById(tournamentId,participantId,participants) {
    var name = ""
    participants.forEach(participant => {
        if (tournamentId === participant.participant.tournament_id && participantId === participant.participant.id) {
            if (participant.participant.challonge_username === null) {
                name = participant.participant.name
            }
            else {
                name = participant.participant.challonge_username
            }
        }
    });
    return name
}
module.exports = getPlayerNameById;