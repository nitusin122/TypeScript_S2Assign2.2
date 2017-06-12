var Vehicle = (function () {
    //Parameterized Constructor
    function Vehicle(wheel, brand) {
        this._wheel = wheel;
        this._brand = brand;
    }
    Vehicle.prototype.getVehicle = function () {
        return ("My Vehicle:- Wheels: " + this._wheel + " Name: " + this._brand);
    };
    return Vehicle;
}());
