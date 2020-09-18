class Car {
  static getSpecs(car) {
    console.log(car);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  constructor(maxSpeed, speed, isOn, distance, price) {
    this.maxSpeed = 200;
    this.speed = 0;
    this.isOn = true;
    this.distance = 0;
    this._price = 2000;
  }

  turnOn() {
    this.isOn;
  }

  turnOff() {
    this.isOn = false;
    if (this.isOn === false) {
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value) {
    if (this.speed > 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.turnOn) {
      this.distance = hours * this.speed;
    }
  }
}

const mustang = new Car();

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
