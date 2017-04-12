*************************************************************************
  front_end_javascript_master_notes
*************************************************************************
*objects and methods ( this )
*factory functions
*object oriented programing ( key points )
*function contexts and objects
*global object
*Implicit function execution context
*hard binding functions with contexts
*dealing with context loss (3 parts)
*gentle introduction of keyword 'this' blogpost notes
//
*higher order functions
*closures and private data


*************************************************************************
*objects and methods ( this )

  methods   => functions with a receiver
  functions => no reciever

  what is the difference between function invocation and method invocation?

  object methods are just properties that have a value set to a function

  every function is called with a context


  *************************************************************************
  this

    'this' is automatically available to methods
    'this' is a reverence to the object itself
    'this' allows you to access and modify the properties of the object

    var car = {
      running: false,

      start: function() {
        this.running = true;
      },

      stop: function() {
        this.running = false;
      }
    }

    car.start();
    console.log(car);  // Object {running: true}

    car.stop();
    console.log(car);  // Object {running: false}


    running, start, stop all have the context of the global window object (car)
      and can access that global window object with 'this'
      if the global window object name (car) changes,
        the methods will retain access to the changed name through 'this'


    *************************************************************************
    difference between function and method invocations

      car.start(), car.stop() are method invocations
        car is the receiver

      car.start;                     // method invocation
      var startingCar = car.start;   // var to point at the method invocation
      startingCar()                  // funciton invocation


    *************************************************************************
    mutating Objects

      function increment(thing) {
        thing.num += 1;
      }

      var boxes = { count: 1 };
      var cans = { count: 4 };

      increment(boxes);

      even though 'thing' is inside a function it can mutate the boxes count
      both 'thing' and 'boxes' hold reference to the same object
        when the count is changed the references still point to the same object and reflect the change


*************************************************************************
*factory functions

  creating objects using functions

  function car(mpg, currentGas) {
    mpg : mpg,
    gasTank : currentGas,
    drive : function(miles) {
      this.gasTank - (miles / this.mpg)
    }
  }

  sedan = car(34, 12);
  sedan.drive(64)
  sedan.gasTank   // 10;

  factory functions allow you to make multiple instances of a car and instanciate different propertiy values

  coupe = car(17, 12)
  sedan.drive(64)
  sedan.gasTank   // 8


*************************************************************************
*object oriented programing

  object oriented programing allows you re-use patterns as the basic building blocks of code
  this is safer than using local variables or functions


  example : non OOP
    each var has to have a unique name because it is in the same scope
    we need to know the vehicle range which is mpg * fuel

    var smallCarFuel = 7.8;
    var smallCarMpg = 37;

    var largeCarFuel = 9.4;
    var largeCarMpg = 29;

    var truckFuel = 14.3;
    var truckMpg = 23;

    function vehicleRange(fuel, mpg) {
      return fuel * mpg;
    }

    vehicleRange(smallCarFuel, smallCarMpg); // => 288.6
    vehicleRange(largeCarFuel, largeCarMpg); // => 272.6
    vehicleRange(truckFuel, truckMpg);       // => 328.9


  example : OOP
    we reorganize related data into an object
    the relationship between mpg and fuel becomes clearer
    behaviors are placed in the object
    notice how many fewer var names
    objects can perform opperations on the data they own
    the code is easer to read and understand than the non OOP example


    function makeVehicle(fuel, mpg) {
      return {
        fuel: fuel,
        mpg: mpg,
        range: function() {
          return this.fuel * this.mpg;
        }
      };
    }

    var smallCar = makeVehicle(7.8, 37);
    smallCar.range();   // => 288.6

    var largeCar = makeVehicle(9.4, 29);
    largeCar.range();   // => 272.6

    var truck = makeVehicle(14.3, 23);
    truck.range();      // => 328.9


  OOP makes it easier to understand these questions

    | What are the important concepts in the code?
    | What are the properties of a vehicle?
    | How is a vehicle created?
    | What operations can I perform with a vehicle?
    | Where should new properties and methods affecting vehicles be added to the code?


  *************************************************************************
  key points

    |  Object-oriented programming is a pattern that uses objects to organize code
    |    instead of procedures or Functions.
    |    Unlike procedures and functions, objects can also contain data.
    |
    |  A function contained in an object is called a method.
    |
    |  Methods can be added to an object at any time, just like any other property.
    |
    |  When an object's methods are invoked, they can access the object they belong to by using this.

    |  Objects become more useful as projects become larger and more complicated.


*************************************************************************
*function contexts and objects

  key point
    javascript has first class functions, meaning they ..

      | can be added to objects and executed in the context of those objects
      | can be removed from their objects, passed around, and executed in completely different contexts
      | are initially unbound to any object, but are dynamically provided a context when they are executed.



*************************************************************************
*global object

  global objects or variables are added to the global object as properties


  window is the global object in the browser it has its own functions
    window.alert()
    window.prompt()
    window.confirm()
    window.open()

  window also has access to global values such as
    window.parseInt()
    window.isNaN()
    window.Infinity()

  or even add properties
  window.foo = 1;

  when you assign foo without a var declaration it is implicitly defined in the global scope
    foo = 1;          (is actually)
    window.foo = 1;


  when a global variable is created without var declaration and
    implicitly placed in the global scope you can delete it

    foo = 1;
    window.foo   // 1
    delete foo   // true

  if var delcaration is made you can't delete it
  the same is true with functions

    var foo = 1;
    window.foo;  // 1
    delete foo   // false


*************************************************************************
*Implicit function execution context  (aka implicit binding for functions)

  if 'this' is not a part of an object becomes binded with the implicit global context

  when the finction binds 'this' to the global(window) object implicitly
    if the function is called as a method inside an object it is bound to that object instead (not implicit binding)

  context object => the object that 'this' binds to

    function foo() {
      return 'this here is: ' + this;  // 'this' references the global object
    }

    console.log(foo());                // "this here is: [object Window]"

    the function foo has a execution context (has been implicitly binded) to the global object
    window.foo()


  not implicitly binded example
  if the function is inside a defined object 'this' will be binded to that object instead

    var obj = {
      foo: function() {
        return 'this here is ' + this  // the context object of 'this' is obj object
      }
    }

    console.log(obj.foo());            // this here is: [object Object]


  the context object is not determined(bound) when the function is defined but when the funciton is executed

    var bar = obj.foo;

    console.log(bar());                // this here is: [object Window]

    the context object of bar() implicitly binds to the global window not the obj context


*************************************************************************
call and apply

  call allows us to specify the execution context when a function is executed
    apply is similar to call only that it accepts an array as arguments
      someObject.someMethod.apply(context, [arg1, arg2, arg3..])

    var a = 1;

    obj = {
      a: 'hello',
      b: 'world',
    }

    function foo() {
      return 'this here is ' + this
    }

    foo();                            // this here is [object Window]

    foo.call(obj)                     // this here is [object Object]



  call allows you to use a function inside of one object to use with multiple objects

    calculate = {
      name: null,
      numbers: [],
      add: function() {
        return this.numbers.reduce(function(sum, num) {
          return sum += num;
        })
      },
    }

    obj1 = {
      name: 'bill',
      numbers: [3,2,3,4],
    }

    calculate.add.call(obj1);       // 15


  arguments are specified after the call context

    calculate = {
      name: null,
      numbers: [],
      add: function(type) {
        return this.name + ' ' + type + ' $' + this.numbers.reduce(function(sum, num) {
          return sum += num;
        })
      },
    }

    person1 = {
      name: 'bill',
      numbers: [3,2,3,4],
    }

    person2 = {
      name: 'julia',
      numbers: [3,1,3,9],
    }

    console.log(calculate.add.call(person1, 'paid'));
    console.log(calculate.add.call(person2, 'owes'));


*************************************************************************
*hard binding functions with contexts

  call and apply allow us to specify the execution context when a funciton is executed

  bind allows us to permently bind a function to it's context object
    when we use bind we are working with a fixed (function) return value, and can store it as a value


  var a = 1;

  obj = {
    a : 'hello',
    b : 'world',
    greet: function() {
      console.log(this.a + ' ' + this.b);
    }
  }

  var foo = obj.greet.bind(obj)    // binds foo to the obj

  obj2 = {
    a: 'good',
    b: 'bye',
  }

  foo.call(obj2);                  // call(obj2) is ignored, foo is still bound to obj


  bind() is not is not executing a function but returns a new funciton with 'thit' permently bound
    this allows us to pass around the function knowing that its context won't change


  example:

  var greetings = {
    morning: 'Good morning, ',
    afternoon: 'Good afternoon, ',
    evening: 'Good evening, ',

    greeting: function(name) {
      var currentHour = (new Date()).getHours();

      if (currentHour < 12) {
        console.log(this.morning + name);
      } else if (currentHour < 18) {
        console.log(this.afternoon + name);
      } else {
        console.log(this.evening + name);
      }
    },
  };

  var spanishWords = {
    morning: 'Buenos días, ',
    afternoon: 'Buenas tardes, ',
    evening: 'Buena noches, ',
  }

  var spanishGreeter = greetings.greeting.bind(spanishWords);

  spanishGreeter('Jose');      // Buenas tarde Jose
  spanishGreeter('Juan');      // Buenas tarde Jose

  greetings.greeting('Nate');  // Good afternoon Nate
  greetings.greeting('Julia'); // Good afternoon Julia



*************************************************************************
*dealing with context loss (3 parts)

  (review) changing the context of a function

    three ways of defining the execution context of a function
      1. call or apply the object to the function
      2. bind the function to an object and assign the return value to a variable that can be re-used
      3. change the execution context of a function by assigning it to a variable in an object (creating a method)


  *************************************************************************
  dealing with context loss (1)

    Taking a method out of an object
    two solltions (call/apply or bind)

    Solution 1: passing the context with the function and then calling or applying the context


      function repeatThreeTimes(func, context) {
        func.call(context);       // the context is out of scope can't do func.call(john) unless context is passed in
        func.call(context);
        func.call(context);
      }

      function foo() {
        var john = {
          firstName: 'John',
          lastName: 'Doe',
          greetings: function() {
            console.log('hello, ' + this.firstName + ' ' + this.lastName);
          },
        };

        repeatThreeTimes(john.greetings, john);
      }

      foo();


    Solution 2: hard binding the object (john) to the function being passed

      function repeatThreeTimes(func) {
        func();       // func() can be called because john is bound to john.greetings
        func();
        func();
      }

      function foo() {
        var john = {
          firstName: 'John',
          lastName: 'Doe',
          greetings: function() {
            console.log('hello, ' + this.firstName + ' ' + this.lastName);
          },
        };

        repeatThreeTimes(john.greetings.bind(john));
      }

      foo();


  *************************************************************************
  dealing with context loss (2)

    problem:
      when function bar() is executed the context is attached to the global object instead of the obj

      obj = {
        a: 'hello',
        b: 'world',
        foo: function() {
          function bar() {
            console.log(this.a + ' ' + this.b);
          }

          bar();
        },
      };

      obj.foo();        // undefined undefined


    solution (1):
      assign a new var 'self' to 'this' where bar() has access to the lexical scope of 'self'

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

      obj.foo();        // hello world


    solution (2):
      specify the exectution context of bar using bar.call(this)

      obj = {
        a: 'hello',
        b: 'world',
        foo: function() {
          function bar() {
            console.log(this.a + ' ' + this.b);
          }

          bar.call(this);
        },
      };

      obj.foo();        // hello world


    solution (3):
      use bind(this) to the function and store the binded function in a var
      bind has the additional advantage of only needing to be bound once and can be called multiple times anywhere

      obj = {
        a: 'hello',
        b: 'world',
        foo: function() {
          var bar = function bar() {
            console.log(this.a + ' ' + this.b);
          }.bind(this);

          bar();
        },
      };

      obj.foo();        // hello world



  *************************************************************************
  dealing with context loss (3)

    problem:
      it is common to call a function inside a method
      but the 'this' context is not preserved during the function execution
        there are three ways to fix this (same as previous examples)

        obj = {
          a: 'hello',
          b: 'world',
          foo: function() {
            [1, 2, 3].forEach(function(number) {
              console.log(String(number) + ' ' + this.a + ' ' + this.b);
            });
          },
        };

        obj.foo();


      solution (1)

        obj = {
          a: 'hello',
          b: 'world',
          foo: function() {
            var self = this;
            [1, 2, 3].forEach(function(number) {
              console.log(String(number) + ' ' + self.a + ' ' + self.b);
            });
          },
        };

        obj.foo();


      solution (2)

        obj = {
          a: 'hello',
          b: 'world',
          foo: function() {
            [1, 2, 3].forEach(function(number) {
              console.log(String(number) + ' ' + this.a + ' ' + this.b);
            }.bind(this));
          },
        };

        obj.foo();


      solution (3)
        use the forEach optional thisArg argument

        obj = {
          a: 'hello',
          b: 'world',
          foo: function() {
            [1, 2, 3].forEach(function(number) {
              console.log(String(number) + ' ' + this.a + ' ' + this.b);
            }, this);
          },
        };

        obj.foo();


*************************************************************************
*gentle introduction of keyword 'this' blogpost notes
  https://rainsoft.io/gentle-explanation-of-this-in-javascript/

  (function invocation, method invocation, indirect invocation, bound function)

  intro

    the main difference between a function invocation and method invocation is a method invocation
      uses a property accessor to execute the function
        obj.propertyName()    // .propertyName() is the property accessor
        obj[propertyName]()

      a function invocation does not use a propty accessor
        myFunction()


  *************************************************************************
  function invocation
    if a value is a function and followed by () it is invoked
      example: Number()

    it is not the same as property accessor
      obj.doSomething()             // this is method invocation
      [1,5].join(',')               // this is a method invocation

    use strict allows you to prevent implicit function context execution
    if a function has 'use strict', 'this' will return undefined and not attach to the global object
    'use strict'; // enable the strict mode
      this also enables strict mode in any inner scopes

    function strict() {
      'use strict';
      console.log(this === undefined);   // true
    }




  *************************************************************************
  method invocation


  *************************************************************************
  indirect invocation


  *************************************************************************
  bound function




*************************************************************************
  (review) closure and named functions
    there are two syntaxes for creating a function
    both follow the same lexical scoping rules

    named function syntax
      function foo() {
        console.log('named function');
      }

    function expression syntax
      var foo = function() {
        console.log('function expression');
      }


*higher order functions
    is a function that works with other functions and does at least one of the two things
    it helps to think of javascript functions as values

      1. either accept a function as an argument
      2. or return a function


      example accept a function as an argument

        arr = [1, 4, 2, 3, 5]

        arr.forEach(
          function(value) { console.log(value + 1) }
        )

      example of function that returns a function

        function helloFactory() {
          return function() { console.log('hi ' + this) }
        }


*************************************************************************
*closures and private data