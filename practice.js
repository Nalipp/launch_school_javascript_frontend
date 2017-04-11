var a = 'hi'
var b = 'there'

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;
    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo();        // undefined undefined



// implement this concept in your timer project!!
var database = {
 index: 1,
 allUsers: [],
 add: function increment(user) {
  user.id = this.index;
  console.log(user.count);
  this.allUsers.push(user)
  this.index += 1;
}
}


var nate = { name: 'nate' };
var julia = { name: 'julia' };
var hyeonu = { name: 'hyeonu' };
console.log(nate);

database.add(nate);
database.add(julia);
database.add(hyeonu);

console.log(database.allUsers);


function makeCar(accelerationRate) {
  return { 
    speed: 0, 
    rate: accelerationRate,
    accelerate: function() {
      this.speed += this.rate;
    } 
  }
}


var sedan = makeCar(8);
sedan.accelerate();
sedan.accelerate();
sedan.accelerate();
var coupe = makeCar(12);

console.log(sedan);
