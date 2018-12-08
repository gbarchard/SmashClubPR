var getPlayerNameById = function getPlayerNameById(tournamentId,participantId,participants) {
    var name = ""
    participants.forEach(participant => {
        if (tournamentId === participant.participant.tournament_id && participantId === participant.participant.id) {
            name = participant.participant.display_name
        }
    });
    return name
}
module.exports = getPlayerNameById;