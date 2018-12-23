var Discord = require('discord.io');
var discordReplies = require('./replies/replies.js')

var initializeDiscord = function initializeDiscord() {

var bot = new Discord.Client({
    token: process.env.discord_token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function(errMsg, code) {
    console.log(errMsg)
    console.log(code)
});

discordReplies(bot)

}

module.exports = initializeDiscord;