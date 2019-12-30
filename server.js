var initializeAPI = require('./api/server.js')
var initializeDiscord = require('./sources/discord/server.js');

initializeAPI()
initializeDiscord()
