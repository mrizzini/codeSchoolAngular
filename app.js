/* global angular */

// express library

// var express = require('express')
// var app = express();

// app.get("/", function(request, response) { // this line sends index.html to user
//     response.sendFile(__dirname + "/public/index.html");   // __dirname = root directory of the app. 
//     //if you make changes in here, you need to restart the server to see the updates
// });

//listen for incoming signals on this port.

// app.listen(process.env.PORT);
(function(){ // wrapping app in a closure. wrapping Javascript in a closure is a good habit
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){ //specifies the name of our controller. capital case and use controller
        this.cars = carOptions; // sets carOptions to a property of the controller
    });

    var carOptions = [
    {
        type: 'Midsize',
        name: 'Honda Accord',
        price: 40,
        description: 'Great car for families',
        canRent: true,
        soldOut: false
    },
    {
        type: 'Luxury',
        name: 'Cadillac XTS',
        price: 95,
        description: 'Great for showing off in that important business conference',
        canRent: true,
        soldOut: false
    }
    ];


})();



