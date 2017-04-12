function greet(greeting, name) {
  var capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(capitalized + ', ' + name + '!');
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  }
}

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!
