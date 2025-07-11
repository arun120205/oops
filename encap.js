class Car {
  constructor(brand) {
    this.brand = brand; // public
    let speed = 0;      // private via closure

    this.getSpeed = function () {
      return speed;
    };

    this.setSpeed = function (value) {
      if (value >= 0) {
        speed = value;
      } else {
        console.log("Invalid speed");
      }
    };
  }
}

const c = new Car("Toyoto");
console.log(c.brand);        // Toyota
console.log(c.getSpeed());   // 0
c.setSpeed(80);
console.log(c.getSpeed());   // 80
