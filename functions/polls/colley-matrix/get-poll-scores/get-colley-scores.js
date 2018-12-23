var addNamesToPoll = require('./add-names-to-poll.js');


var getColleyScores = function getColleyScores(matches, players) {
	let Colley = require('colley-rankings');

	let C = Colley(players.length); // Create a n-person league
			
			matches.forEach(match => {
					winner_name = players.indexOf(match.match.winner_name)
					loser_name= players.indexOf(match.match.loser_name)
					C.addGame(winner_name, loser_name);
			});

			poll = (C.solve().array)

			return addNamesToPoll(players, poll)
	}

module.exports = getColleyScores;


