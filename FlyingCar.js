let Car = require("./Car");
class FlyingCar extends Car {
  constructor(Model, Year) {
    super(Model, Year);
    this.fly = true;
  }
  carData() {
   super.carData();
    console.log("I Can Fly");
  }
}

module.exports = FlyingCar;
