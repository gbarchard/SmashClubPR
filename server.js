var initializeDiscord = require('./sources/discord/server.js');

var express = require('express');
var app     = express();


//For avoiding Heroku $PORT error
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
//End For avoiding Heroku $PORT error

initializeDiscord()