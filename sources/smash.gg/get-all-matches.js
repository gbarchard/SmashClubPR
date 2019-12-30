var getAllMatches = function getAllMatches(data,participants) {
    
    let matches = []
    var tournamentCount = 0
    var setCount = 0
    
    data.tournaments.nodes.forEach(tournament => {
        tournament.events.forEach(result => {
            tournamentCount++
            result.sets.nodes.forEach(set => {
                setCount++
                var winner_name = ""
                var loser_name = ""
                if(set.displayScore != "DQ") {
                if (set.slots[0].entrant.id === set.winnerId) {
                    participants.forEach(participant => {
                        if(participant.participant.id == set.slots[0].entrant.id) {
                            winner_name = participant.participant.name
                        }
                    })
                }
                else {
                    participants.forEach(participant => {
                        if(participant.participant.id === set.slots[0].entrant.id) {
                            loser_name = participant.participant.name

                        }
                    })
                }

                if (set.slots[1].entrant.id === set.winnerId) {
                    participants.forEach(participant => {
                        if(participant.participant.id == set.slots[1].entrant.id) {
                            winner_name = participant.participant.name

                        }
                    })                }
                else {
                    participants.forEach(participant => {
                        if(participant.participant.id === set.slots[1].entrant.id) {
                            loser_name = participant.participant.name
                        }
                    })
                }
                console.log("winner " + winner_name + " loser " + loser_name)                }
                if(winner_name != "" && loser_name != "") {
                    matches.push(
                        {
                        "match": {
                            "winner_name": winner_name,
                            "loser_name": loser_name
                            }
                        }
                    )
                }
            })
        })
    });
    console.log(matches)
    console.log(matches.length)
    return matches
};
module.exports = getAllMatches

// {
//     match: {
//       id: 144806009,
//       tournament_id: 5395515,
//       state: 'complete',
//       player1_id: 88357958,
//       player2_id: 88357961,
//       player1_prereq_match_id: 144806003,
//       player2_prereq_match_id: 144806008,
//       player1_is_prereq_match_loser: true,
//       player2_is_prereq_match_loser: false,
//       winner_id: 88357961,
//       loser_id: 88357958,
//       started_at: '2019-01-01T13:09:17.243-07:00',
//       created_at: '2019-01-01T13:07:06.375-07:00',
//       updated_at: '2019-01-01T13:09:21.318-07:00',
//       identifier: 'O',
//       has_attachment: false,
//       round: -4,
//       player1_votes: null,
//       player2_votes: null,
//       group_id: null,
//       attachment_count: null,
//       scheduled_time: null,
//       location: null,
//       underway_at: null,
//       optional: false,
//       rushb_id: null,
//       completed_at: '2019-01-01T13:09:21.381-07:00',
//       suggested_play_order: 13,
//       forfeited: null,
//       og_image_url: null,
//       prerequisite_match_ids_csv: '144806003,144806008',
//       scores_csv: '0-2',
//       winner_name: 'person2',
//       loser_name: 'person1'
//     }
//   },