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
	getSmashData(startDate, endDate, function(data, error) {
		if (error) {
			callback({},{},true,{})
		}
		else {
			allParticipantsNames = getAllParticipantNames(data)
			allParticipants = getAllParticipants(data)
			allMatches = getAllMatches(data,allParticipants)
			callback(allMatches,allParticipantsNames,false,allParticipants)
		}
		
	})
}

module.exports = getDataForPoll;