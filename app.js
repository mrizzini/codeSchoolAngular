// express library

var express = require('express')

var app = express();

app.get("/", function(request, response) { // this line sends index.html to user
    response.sendFile(__dirname + "/public/index.html");   // __dirname = root directory of the app. 
    //if you make changes in here, you need to restart the server to see the updates
});

//listen for incoming signals on this port.

app.listen(process.env.PORT);