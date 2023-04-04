class Car {
  constructor(model, year) {
    (this.model = model), (this.year = year);
  }
  carData() {
    console.log(`Model : ${this.model}  Year : ${this.year} `);
  }
}

module.exports = Car;

console.log(module);
