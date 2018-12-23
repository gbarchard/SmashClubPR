var getPollMessage = require('./get-poll-message.js')
var sendMessage = require('./send-message.js')

var discordReplies = function discordReplies(bot) {
    bot.on('message', function(user, userID, channelID, message, event) {
        message = message.split(" ")
        if (user != bot.username) {
            var response = ""
            if (message[0].charAt(0) === "!"){
                switch (message[0].toLowerCase()) {
                    case "!pr":
                        bot.simulateTyping( channelID )
                        getPollMessage(message, function(poll){
                            sendMessage(bot, channelID, poll)
                        })
                        break        
                    case "!help":
                        response = "**!pr** = gives the current rankings\n**!pr spring/fall YYYY** = gives past rankings\n**!youtube** = gives the youtube channel\n**!twitch** = gives the twitch channel"
                        break
                    case "!twitch":
                        response = "https://www.twitch.tv/southernsmashclub"
                        break
                    case "!youtube":
                        response = "https://www.youtube.com/channel/UCQcDG_TKh41FAq45efq012Q"
                        break
                    default:  
                        response = "Command not recognized. Type ```!help``` to see a list of commands"
                }
            }
        sendMessage(bot, channelID, response)
        }
    })
}

module.exports = discordReplies;