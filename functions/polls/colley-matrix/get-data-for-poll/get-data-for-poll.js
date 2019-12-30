var findTournaments = require('../../../../sources/challonge/functions/list-tournaments-by-start-date.js');
var findTournamentMatches = require('../../../../sources/challonge/tournaments/list-tournament-matches.js');
var findTournamentParticipants = require('../../../../sources/challonge/participants/list-tournaments-participants.js');
var findAllParticipants = require('./find-players-in-tournament.js');
var addNamesToMatches = require('./add-names-to-matches.js');
var getSmashData = require('../../../../sources/smash.gg/server.js')
var getAllParticipantNames = require('../../../../sources/smash.gg/getAllParticipantNames')
var getAllParticipants = require('../../../../sources/smash.gg/get-all-participants')
var getAllMatches = require('../../../../sources/smash.gg/get-all-matches')

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

var getDataForPoll = function getDataForPoll(startDate, endDate, callback) {
	startDate = new Date(startDate).getUnixTime();
	endDate = new Date(endDate).getUnixTime();
	getSmashData(startDate, endDate, function(data) {
		allParticipantsNames = getAllParticipantNames(data)
		allParticipants = getAllParticipants(data)
		allMatches = getAllMatches(data,allParticipants)
		callback(allMatches,allParticipantsNames,false,allParticipants)
	})
}

// var getDataForPoll = function getDataForPoll(startDate, endDate, callback) {
// 	findTournaments(startDate,endDate,function(tournaments,response) {
// 		if (tournaments.status === "500" || tournaments.length === 0) {
// 			callback([],[],true)
// 		}
// 		else {
// 			var allMatches = []
// 			var itemsProcessed = 0
// 			tournaments.forEach((tournament, index, array) => {
// 				findTournamentMatches(tournament.tournament.id, function (tournament, response) {
// 					allMatches = allMatches.concat(tournament)
// 					itemsProcessed++
// 					if (itemsProcessed === array.length) {
// 						var allParticipants = []
// 						var tournamentsProcessed = 0
// 						tournaments.forEach((tournament, index, list) => {
// 							findTournamentParticipants(tournament.tournament.id, function (participants, response) {
// 								allParticipants = allParticipants.concat(participants)
// 								tournamentsProcessed++
// 								if (tournamentsProcessed === list.length) {
// 									allMatches = addNamesToMatches(allMatches,allParticipants)
// 									let allParticipantsNames = []
// 									allParticipantsNames = findAllParticipants(allMatches)
// 									console.log(allMatches)
// 									callback(allMatches,allParticipantsNames,false,allParticipants)
// 								}
// 							})
// 						})
// 					}
// 				}); 
// 			})
// 		}
// })
// } 

module.exports = getDataForPoll;


