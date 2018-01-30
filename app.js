/* global angular $ */


(function(){ // wrapping app in a closure. wrapping Javascript in a closure is a good habit
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){ //specifies the name of our controller. capital case and use controller
        this.cars = carOptions; // sets carOptions to a property of the controller
    });

    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;  
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;  
    };
  });

    app.controller('RentController', function (){
   
        this.rentCar = function(cars) {
		if (cars.available > cars.rented) {
			cars.rented = cars.rented + 1;
			console.log(cars.rented);
		} else if (cars.available == cars.rented) {
			cars.soldOut = true;
		}
   };
});
    


    var carOptions = [
    {
        type: 'Midsize',
        name: 'Honda Accord',
        price: 40,
        description: 'Great car for families',
        canRent: true,
        soldOut: false,
        available: 10,
        rented: 0,
        features: ["Backup Camera, ", "Heated Seats, ", "Wi-Fi"],
        images: [
            "http://www.automoblog.net/wp-content/uploads/2017/08/10-2018-Honda-Accord-Touring-200x200.jpg"
            ]
    },
    {
        type: 'Luxury',
        name: 'Cadillac XTS',
        price: 95,
        description: 'Great for showing off in that important business conference',
        canRent: true,
        soldOut: false,
        available: 4,
        rented: 0,
        features: ["Backup Camera, ", "Heated Seats, ", "Wi-Fi, ", "GPS, ", "Bluetooth"],
        images: [
        "https://3.bp.blogspot.com/-ICvUYGYExCQ/WUfYNrddMWI/AAAAAAAA2ls/_pEabKoYQPgEGbzF-sHb6xAOefL7XqgWgCLcBGAs/s200-c/2018-Cadillac-XTS-001.jpg"    
        ]
    },
    {
        type: 'Motorcyle',
        name: 'Harley Davidson',
        price: 25,
        description: 'An All-American classic bike',
        canRent: true,
        soldOut: false,
        available: 8,
        rented: 0,
        features: ["Fuel Efficient, ", "Radio, ", "Chain Driven, "],
        images: [
        "https://gq-images.condecdn.net/image/L5OojerB2AK/crop/200/square/f/Harley-Davidson-GQ-13Nov17_b.jpg"    
        ]
    }
    ];

})();



