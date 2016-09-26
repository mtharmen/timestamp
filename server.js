var express = require('express');
var routes = require('./app/routes/timestampApp.js');
var app = express();

app.use('/', express.static(__dirname + '/app/styles'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port ', port);
});