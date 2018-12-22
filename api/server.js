//right now the api only exists to make heroku happy.
//if the app doesn't bind to the heroku assigned port it kills the process
var express = require('express');
var app     = express();

var initializeAPI = function initializeAPI() {
    app.set('port', (process.env.PORT || 5000));

    app.get('/', function(request, response) {
        var result = 'App is running'
        response.send(result);
    }).listen(app.get('port'), function() {
        console.log('App is running, server is listening on port ', app.get('port'));
    });
}

module.exports = initializeAPI;