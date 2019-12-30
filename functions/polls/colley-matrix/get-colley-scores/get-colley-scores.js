var addNamesToPoll = require('./add-names-to-poll.js');
var min3Tournaments = require('../format-poll-for-display/min-3-tournaments')

var getColleyScores = function getColleyScores(matches, players) {
	let Colley = require('colley-rankings');
	var justPlayers = []
	// console.log(players)
	players.forEach(player => {
		// console.log(player)
		justPlayers.push(player[0])
	})
	// console.log(justPlayers)
	let C = Colley(justPlayers.length); // Create a n-person league
			
		matches.forEach(match => {
				winner_name = justPlayers.indexOf(match.match.winner_name)
				loser_name= justPlayers.indexOf(match.match.loser_name)
				C.addGame(winner_name, loser_name);
		});

		poll = (C.solve().array)
		var min3 = min3Tournaments(players,poll)
		return addNamesToPoll(min3[0], min3[1])
	}

module.exports = getColleyScores;