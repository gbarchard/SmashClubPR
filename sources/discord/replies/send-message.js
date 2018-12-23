var sendMessage = function sendMessage(bot, channelID, message) {
    bot.sendMessage({
        to: channelID,
        message: message
    });
}

module.exports = sendMessage;