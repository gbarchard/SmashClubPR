var getColleyScores = function getColleyScores(matches, players) {
	let Colley = require('colley-rankings');

	let C = Colley(players.length); // Create a n-person league
			
			matches.forEach(match => {
					winner_id = players.indexOf(match.match.winner_id)
					loser_id = players.indexOf(match.match.loser_id)
					C.addGame(winner_id, loser_id);
			});

			return (C.solve().array)
	}

module.exports = getColleyScores;


