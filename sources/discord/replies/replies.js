var getPoll = require('../../../functions/get-poll.js');
var prArguments = require('../../../functions/pr-arguments.js');

var discordReplies = function discordReplies(bot) {
 
bot.on('message', function(user, userID, channelID, message, event) {
    message = message.split(" ")
    if (user != bot.username) {
        var res = ""
        if (message[0].charAt(0) === "!"){
            switch (message[0].toLowerCase()) {
                case "!pr":
                    bot.simulateTyping( channelID )
                    break        
                case "!help":
                    res = "!pr = gives the current rankings\n!pr spring/fall YYYY = gives past rankings\n!youtube = gives the youtube channel\n!twitch = gives the twitch channel"
                    break
                case "!twitch":
                    res = "https://www.twitch.tv/southernsmashclub"
                    break
                case "!youtube":
                    res = "https://www.youtube.com/channel/UCQcDG_TKh41FAq45efq012Q"
                    break
                default:  
                    res = "Command not recognized. Type !help to see a list of commands"
            }
        }
    console.log(res)
    bot.sendMessage({
        to: channelID,
        message: res
        });
    }
    if (user != bot.username) {
        if (message[0].toLowerCase() === "!pr") {
            var dates = prArguments(message)
            var startDate = dates[0]
            var endDate = dates[1]
            if (startDate === null) {
                bot.sendMessage({
                    to: channelID,
                    message: "Command not recognized. Type !help to see a list of commands"
                });
            }
            else {
                getPoll(startDate,endDate,function(poll,error) {
                    if (error === true) {
                        bot.sendMessage({
                            to: channelID,
                            message: "No tournaments found"
                        })
                        
                    }
                    else {
                        bot.sendMessage({
                            to: channelID,
                            message: "```" + poll + "```"
                        });
                    }                                   
                })
            }           
        }
    }
});
}

module.exports = discordReplies;