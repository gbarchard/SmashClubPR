var Discord = require('discord.io');
var bot = new Discord.Client({
	token: "NTIwOTgyODg4NzA4MTc3OTIw.Du15Ww.R6BdEP-pDABePrizI82_h0jcqdE",
	autorun: true
});

bot.on('ready', function() {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
	if (message === "ping") {
			bot.sendMessage({
					to: channelID,
					message: "pong"
			});
	}
});