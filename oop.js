/*

Object oriented programming in javascript 


As JavaScript is widely used in Web Development, in this article we would explore some of the Object Oriented mechanism supported by JavaScript to get most out of it.
Some of the common interview question in JavaScript on OOPS includes,- “How Object-Oriented Programming is implemented in JavaScript? 
How they differ from other languages? Can you implement Inheritance in JavaScript and so on…”

There are certain features or mechanisms which makes a Language Object Oriented like:

1. Object
2. Classes
3. Encapsulation
4. Inheritance
*/

// object
let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));
// Expected Output
// Dillion
// false

//So where does hasOwnProperty come from?
console.log(names);
/*

Every object has this property by default, which refers to the Object Protoype except when configured otherwise (that is, when the object's __proto__ is pointed to another prototype).

*/

function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);




//Defining object 
let person = { 
	first_name:'Mukul', 
	last_name: 'Latiyan', 

	//method 
	getFunction : function(){ 
		return (`The name of the person is 
		${person.first_name} ${person.last_name}`) 
	}, 
	//object within object 
	phone_number : { 
		mobile:'12345', 
		landline:'6789'
	} 
} 
console.log(person.getFunction()); 
console.log(person.phone_number.landline); 




// using object constructor

//using a constructor 
function person_(first_name,last_name){ 
    this.first_name = first_name; 
    this.last_name = last_name; 
    } 
    //creating new instances of person object 
    let person1 = new person_('Mukul','Latiyan'); 
    let person2 = new person_('Rahul','Avasthi'); 
    
    console.log(person1.first_name); 
    console.log(`${person2.first_name} ${person2.last_name}`); 
    



// Classes
// Defining class using es6 
class Vehicle { 
    constructor(name, maker, engine) { 
        this.name = name; 
        this.maker = maker; 
        this.engine = engine; 
    } 
    getDetails(){ 
        return (`The name of the bike is ${this.name}.`) 
    } 
    } 
// Making object with the help of the constructor 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 

console.log(bike1.name); // Hayabusa 
console.log(bike2.maker); // Kawasaki 
console.log(bike1.getDetails()); 

    
// Traditional way
// Defining class in a Traditional Way. 
function Vehicle_(name,maker,engine){ 
	this.name = name, 
	this.maker = maker, 
	this.engine = engine 
}; 

Vehicle_.prototype.getDetails = function(){ 
	console.log('The name of the bike is '+ this.name); 
} 

let bike3 = new Vehicle_('Hayabusa','Suzuki','1340cc'); 
let bike4 = new Vehicle_('Ninja','Kawasaki','998cc'); 

console.log(bike3.name); 
console.log(bike4.maker); 
console.log(bike3.getDetails()); 



// Encapsulation
//encapsulation example 
class person__{ 
	constructor(name,id){ 
		this.name = name; 
		this.id = id; 
	} 
	add_Address(add){ 
		this.add = add; 
	} 
	getDetails(){ 
		console.log(`Name is ${this.name},Address is: ${this.add}`); 
	} 
} 

let person_ref = new person__('Mukul',21); 
person_ref.add_Address('Delhi'); 
person_ref.getDetails(); 


// Abstraction Exaple
// Abstraction example 
function person_(fname,lname){ 
	let firstname = fname; 
	let lastname = lname; 

	let getDetails_noaccess = function(){ 
		return (`First name is: ${firstname} Last 
			name is: ${lastname}`); 
	} 

	this.getDetails_access = function(){ 
		return (`First name is: ${firstname}, Last 
			name is: ${lastname}`); 
	} 
} 
let person_abs = new person_('Mukul','Latiyan'); 
console.log(person_abs.firstname); 
console.log(person_abs.getDetails_noaccess); 
console.log(person_abs.getDetails_access()); 




//Inhertiance example 
class person___{ 
	constructor(name){ 
		this.name = name; 
	} 
	//method to return the string 
	toString(){ 
		return (`Name of person: ${this.name}`); 
	} 
} 
class student extends person___{ 
	constructor(name,id){ 
		//super keyword to for calling above class constructor 
		super(name); 
		this.id = id; 
	} 
	toString(){ 
		return (`${super.toString()},Student ID: ${this.id}`); 
	} 
} 
let student1 = new student('Mukul',22); 
console.log(student1.toString()); 


// Static method
// To add getters and setters in the class, use the get and set keywords.

class Car {
	constructor(brand) {
	  this.carname = brand;
	}
	static hello() {
	  return "Hello!!";
	}
	get cnam() {
		return this.carname;
	  }
	set cnam(x) {
		this.carname = x;
	  }
}
  
mycar = new Car("Ford");
//mycar.cnam("sachin !!!")
console.log(mycar.cnam)
mycar.cnam="sachin"
console.log(mycar.cnam)
console.log(Car.hello())

