function makeCar(rate) {
  return { 
    speed: 0, 
    rate: rate,
    accelerate: function() {
      this.speed += this.rate;
    }, 
    brake: function() {
      this.speed -= this.rate;
      if (this.speed < 0) this.speed = 0;
    }
  }
}


var sedan = makeCar(10);
sedan.accelerate();
sedan.accelerate();
sedan.accelerate();

console.log(sedan.speed);
sedan.brake();

console.log(sedan.speed);
sedan.brake();
sedan.brake();

console.log(sedan.speed);
sedan.brake();

console.log(sedan.speed);


