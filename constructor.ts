class Vehicle{
    private _wheel: number;
    private _brand: string;

    //Parameterized Constructor
    constructor(wheel: number, brand: string){
        this._wheel = wheel;
        this._brand = brand;
    }

    getVehicle(): string{
        return(`My Vehicle:- Wheels: ${this._wheel} Name: ${this._brand}`);
    }
}