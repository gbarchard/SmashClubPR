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
                                    "\n\nStatistics" +
                                    "\n==========" +
                                    "\n(required) [optional]" +
                                    "\n\n(!pr) [spring/fall] [YYYY] \n= rankings" +
                                    "\n\n(!stats) (smash.gg_username) [spring/fall] [YYYY] \n= stats on a player```"              
                        break
                    case "!version":
                        response =  "```Version 2.0.0" +
                                    "\n\n-Now works with smash.gg" +
                                    "\n-Now requires 3 tournaments to be in pr" +
                                    "\n-Now requires 3 tournaments to have !stats displayed```"
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
                        response = "https://bans.page/index.html#1-3-40h-44h-85h_39h-37h-19h-79hnVGhlIEJpcmQgSG91c2U="
                        break
                    case "!schedule":
                        response = "https://docs.google.com/spreadsheets/d/1hFVfwJ_26Z6aSyaYIWL9ccus_oXrABMyW8NMDCLw_yE/edit?usp=sharing"
                        break
                    case "!bracket":
                        response = "https://smash.gg/thebirdhouse"
                        break
                    case "!signup":
                        response = "https://smash.gg/thebirdhouse"
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