var Discord = require('discord.io');
var getPoll = require('./functions/get-poll.js');
const config = require("./config.json");


var bot = new Discord.Client({
    token: config.token,
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