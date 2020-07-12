//  In JavaScript, objects are king. If you understand objects, you understand JavaScript.

/*
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.
*/


// object are variable too and they contain many values.
var person={firstname:"sachin",lastname:"yadav",age:22}
console.log(person['firstname'])
console.log(person)

// Objects are mutable: They are addressed by reference, not by value.
// The object x is not a copy of person. It is person. Both x and person are the same object.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;
console.log(x,person); // result is 10  not 50

for(x in person){
    console.log(person[x]);
}

// adding new properties
person.nationality = "English";

// delete new properties
delete person.age
console.log(person)

// javascript object method adding object
person.fullName =function() {
    return this.firstName + " " + this.lastName;
  }

console.log(person.fullName())

// javascript object constructor
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

const person1 = new Person("sachin","yadav",20,"black")
console.log(person1)

// adding properties and method to object
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
person2 = new Person("sachin","yadav",20,"black")
console.log(person2.name())