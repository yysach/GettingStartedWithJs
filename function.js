// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression.

// function declaration
function sayHello(name){

    console.log("hello to "+name);
}
sayHello("sachin");

// function expression
var x= function(a,b){return a+b};
console.log(x(4,7))


// function constructor
var myFunction = new Function("a", "b", "return a * b");

x = myFunction(4, 3);
console.log(x)

// arrow function
// ES5
x = function(x, y) {
    return x * y;
  }
  
  // ES6
const xy = (x, y) => x * y;
console.log(xy(20,10));

// function arguement and paramters

// parameter rule
/*
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.

*/

// Arguement object
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x)

// function invokation 
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  console.log(myObject.fullName());