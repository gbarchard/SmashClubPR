var getPollMessage = require('./get-poll-message.js')
var sendMessage = require('./send-message.js')
var getBracket = require('../../../functions/brackets/get-bracket')
var getSignup = require('../../../functions/signup/get-signup')
var getStatsMessage = require('./get-stats-message')

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
                        response =  "```md\nResources" +
                                    "\n=========" +
                                    "\n!youtube = youtube channel" +
                                    "\n!twitch = twitch channel" +
                                    "\n!schedule = semester schedule" +
                                    "\n!rules = tournament rules" +
                                    "\n!stages = tournament legal stages" +
                                    "\n\nTournaments" +
                                    "\n===========" +
                                    "\n!signup = signup link" +
                                    "\n!bracket = most recent bracket" +
                                    "\n!volunteer = sign up to bring setups" +
                                    "\n\nStatistics" +
                                    "\n==========" +
                                    "\n(required) [optional]" +
                                    "\n\n(!pr) [spring/fall] [YYYY] \n= rankings" +
                                    "\n\n(!stats) (challonge_username) [spring/fall] [YYYY] \n= stats on a player```"              
                        break
                    case "!version":
                        response =  "```Version 1.1.0" +
                                    "\n\n-!stages has been added" +
                                    "\n-!pr response has new format" +
                                    "\n-!stats is no longer case sensitive" +
                                    "\n-!stats presents proper format if name is not found" +
                                    "\n-!stats now has Best Win```"
                        break
                    case "!twitch":
                        response = "https://www.twitch.tv/southernsmashclub"
                        break
                    case "!youtube":
                        response = "https://www.youtube.com/channel/UCQcDG_TKh41FAq45efq012Q"
                        break
                    case "!rules":
                        response = "https://docs.google.com/document/d/1iZF_DF0UliM8L6OchkxxVScSaSPdkcDNIh-qcpkUGr4/edit?usp=sharing"
                        break
                    case "!stages":
                        response = "https://bans.page/index.html#1-3-40h-44h-85h_33h-37h-19h-79hnVGhlIEJpcmQgSG91c2U="
                        break
                    case "!schedule":
                        response = "https://docs.google.com/spreadsheets/d/1eli7zbbsUCi2ZJidXe_qu1IehJgF1p0w8mZhi9uwWPY/edit?usp=sharing"
                        break
                    case "!volunteer":
                        response = "https://docs.google.com/spreadsheets/d/1P14-3Igzna7Ek-eWK38uixO6nsaL7keB-2BCTaCiNGI/edit?usp=sharing"
                        break
                    case "!bracket":
                        getBracket(function(bracket) {
                            sendMessage(bot, channelID, bracket)
                        })
                        break
                    case "!signup":
                        getSignup(function(signup) {
                            sendMessage(bot, channelID, signup)
                        })
                        break
                    case "!stats":
                        getStatsMessage(message,function(stats) {
                            sendMessage(bot, channelID, stats)
                        })
                        break
                    default:  
                        response = "Command not recognized. Type **!help** to see a list of commands"
                }
            }
        sendMessage(bot, channelID, response)
        }
    })
}

module.exports = discordReplies;