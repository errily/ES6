/*
function Car (manufacture, color){
    this.manufacture = manufacture;
    this.color = color;
    this.engineActive = false;
}

Car.prototype.startEngines = function() {
    console.log(`mobil dinyalakan...`);
    this.engineActive = true;
};

Car.prototype.info = function() {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " +this.color);
    console.log("Engines: " + this.manufacture ? "Active" : "Inactive");
};

var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();
*/

class Car{

constructor (manufacture, color){
    this.manufacture = manufacture;
    this.color = color;
    this.engineActive = false;
}

startEngines() {
    console.log(`mobil dinyalakan...`);
    this.engineActive = true;
}

info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color: ${this.color}`);
    console.log(`Engines: ${this.manufacture ? "Active" : "Inactive" }`);
}

}
var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();