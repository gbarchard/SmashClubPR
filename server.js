var Discord = require('discord.io');
var getPoll = require('./functions/get-poll.js');

var bot = new Discord.Client({
    token: "NTIwOTgyODg4NzA4MTc3OTIw.Du15Ww.R6BdEP-pDABePrizI82_h0jcqdE",
    autorun: true
});
 
bot.on('ready', function() {
    console.log("got here")
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function(errMsg, code) {
    console.log(errMsg)
    console.log(code)

 });

 
bot.on('message', function(user, userID, channelID, message, event) {
    if (user != "PR") {
        let poll = ""
        console.log(user)
        if (message === "!pr") {
            getPoll(function(poll) {
                bot.sendMessage({
                    to: channelID,
                    message: poll
                });
            })
        }
    }
});