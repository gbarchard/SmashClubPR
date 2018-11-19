let Colley = require('colley-rankings');


players = []
results = 
[
    {
        "match": {
            "id": 140302144,
            "tournament_id": 5244080,
            "state": "complete",
            "player1_id": 85702031,
            "player2_id": 85702051,
            "player1_prereq_match_id": null,
            "player2_prereq_match_id": null,
            "player1_is_prereq_match_loser": false,
            "player2_is_prereq_match_loser": false,
            "winner_id": 85702031,
            "loser_id": 85702051,
            "started_at": "2018-11-19T16:18:45.247-06:00",
            "created_at": "2018-11-19T16:18:43.415-06:00",
            "updated_at": "2018-11-19T16:19:19.549-06:00",
            "identifier": "A",
            "has_attachment": false,
            "round": 1,
            "player1_votes": null,
            "player2_votes": null,
            "group_id": null,
            "attachment_count": null,
            "scheduled_time": null,
            "location": null,
            "underway_at": null,
            "optional": false,
            "rushb_id": null,
            "completed_at": "2018-11-19T16:19:19.583-06:00",
            "suggested_play_order": 1,
            "forfeited": null,
            "prerequisite_match_ids_csv": "",
            "scores_csv": "2-1"
        }
    },
    {
        "match": {
            "id": 140302145,
            "tournament_id": 5244080,
            "state": "complete",
            "player1_id": 85702040,
            "player2_id": 85702043,
            "player1_prereq_match_id": null,
            "player2_prereq_match_id": null,
            "player1_is_prereq_match_loser": false,
            "player2_is_prereq_match_loser": false,
            "winner_id": 85702040,
            "loser_id": 85702043,
            "started_at": "2018-11-19T16:18:45.271-06:00",
            "created_at": "2018-11-19T16:18:43.421-06:00",
            "updated_at": "2018-11-19T16:19:29.110-06:00",
            "identifier": "B",
            "has_attachment": false,
            "round": 1,
            "player1_votes": null,
            "player2_votes": null,
            "group_id": null,
            "attachment_count": null,
            "scheduled_time": null,
            "location": null,
            "underway_at": null,
            "optional": false,
            "rushb_id": null,
            "completed_at": "2018-11-19T16:19:29.148-06:00",
            "suggested_play_order": 2,
            "forfeited": null,
            "prerequisite_match_ids_csv": "",
            "scores_csv": "2-0"
        }
    },
    {
        "match": {
            "id": 140302146,
            "tournament_id": 5244080,
            "state": "complete",
            "player1_id": 85702035,
            "player2_id": 85702049,
            "player1_prereq_match_id": null,
            "player2_prereq_match_id": null,
            "player1_is_prereq_match_loser": false,
            "player2_is_prereq_match_loser": false,
            "winner_id": 85702049,
            "loser_id": 85702035,
            "started_at": "2018-11-19T16:18:45.286-06:00",
            "created_at": "2018-11-19T16:18:43.431-06:00",
            "updated_at": "2018-11-19T16:19:37.523-06:00",
            "identifier": "C",
            "has_attachment": false,
            "round": 1,
            "player1_votes": null,
            "player2_votes": null,
            "group_id": null,
            "attachment_count": null,
            "scheduled_time": null,
            "location": null,
            "underway_at": null,
            "optional": false,
            "rushb_id": null,
            "completed_at": "2018-11-19T16:19:37.557-06:00",
            "suggested_play_order": 3,
            "forfeited": null,
            "prerequisite_match_ids_csv": "",
            "scores_csv": "1-2"
        }
    },
    {
        "match": {
            "id": 140302147,
            "tournament_id": 5244080,
            "state": "complete",
            "player1_id": 85702037,
            "player2_id": 85702046,
            "player1_prereq_match_id": null,
            "player2_prereq_match_id": null,
            "player1_is_prereq_match_loser": false,
            "player2_is_prereq_match_loser": false,
            "winner_id": 85702037,
            "loser_id": 85702046,
            "started_at": "2018-11-19T16:18:45.301-06:00",
            "created_at": "2018-11-19T16:18:43.435-06:00",
            "updated_at": "2018-11-19T16:19:45.363-06:00",
            "identifier": "D",
            "has_attachment": false,
            "round": 1,
            "player1_votes": null,
            "player2_votes": null,
            "group_id": null,
            "attachment_count": null,
            "scheduled_time": null,
            "location": null,
            "underway_at": null,
            "optional": false,
            "rushb_id": null,
            "completed_at": "2018-11-19T16:19:45.497-06:00",
            "suggested_play_order": 4,
            "forfeited": null,
            "prerequisite_match_ids_csv": "",
            "scores_csv": "2-0"
        }
    }
]

results.forEach(match => {

    var winner = match.match.winner_id
    var loser = match.match.loser_id
    if (players.indexOf(winner) === -1) {
        players.push(winner)
    }
    if (players.indexOf(loser) === -1) {
        players.push(loser)
    }
});

let C = Colley(players.length); // Create a n-team league

results.forEach(match => {
    var winner = match.match.winner_id
    var loser = match.match.loser_id
    winner_id = players.indexOf(winner)
    loser_id = players.indexOf(loser)
    C.addGame(winner_id, loser_id);
});
console.log(C.solve());
// console.log(results);