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
        if (message.toLowerCase() === "!pr") {
            bot.sendMessage({
                to: channelID,
                message: "Let me check that for you..."
            });
            bot.simulateTyping( channelID )
        }
        else if (message.toLowerCase() === "!help" || message === "!?") {
            bot.sendMessage({
                to: channelID,
                message: "'!pr' will reveal the current rankings"
            });
        }
        else {
            bot.sendMessage({
                to: channelID,
                message: "huh?"
            });
        }
    }
    if (user != "PR") {
        if (message.toLowerCase() === "!pr" || message.toLowerCase() === "!poll" || message.toLowerCase() === "!rankings"){
            getPoll(function(poll) {
                bot.sendMessage({
                    to: channelID,
                    message: "```" + poll + "```"
                });
            })
        }
    }
});