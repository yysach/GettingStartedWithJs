/*
JavaScript is a lightweight, interpreted programming language. 
It is designed for creating network-centric applications.
It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.
*/

console.log('hello from console');
document.write("hello from doucment.write");

/*
 Data type:
 undefined,null, boolean, string, symbol,number and object
*/

var name="sachin yadav" //can change, available for whole progrm
name="vipin yadav"

let ourname="jsLearning"  // only available for declared scope you are using it

const pi=3.14 // can not change

var a;
a=7;
var b=2; // declare + inilialize
console.log(a)  // allow to show it on console
c="i am string"+a
console.log(c)

// double quoated string
var myStr="I ama \"double quoated string\"" 
console.log(myStr)

var str="here it is the string"
console.log(str, " hello this is in the log ",str.length)

// string is immutable in javascript remember that thing
// storing multiple values in the array

// one line comment
// Arithmetic operator +,-,*,/,%,++,--
// Comparison operator ==,!=,>,<,>=,<=,===,!==
// Logical operator &&,||,!
// Bitwise opeator &,|,^,~,<<,>>,>>>
// Assignment operator =,+=,-=,*=,/=,%=,<<=, >>=, >>=, &=, |= and ^=.
// Ternary operator  ?:

// storing multiple values in the array

var ourArray=["john",23] // like python list
console.log(ourArray)

// nested array for 2 D array
ourArray= [["john",23],["sachin",22]]
console.log(ourArray)

// use array index to modifiy array

ourArray[1]=["vipin",20]
console.log(ourArray)

// array of array or 2d array
console.log(ourArray[0][1])
// use .pop(), append() function to experiments like python



// funciton
function ourfun(){
    console.log("hello sachin from function")
}

ourfun();
ourfun();

// parameter passing in js
function adding(a,b){
    console.log(a+b)

}

adding(5,10)

// global variable

a=4
function printingNum(){
    console.log(a)
    var localvariale=5; // locally available for function only
    x=5
    console.log(b)
    return a+b
}

console.log(x)
console.log(printingNum())

// boolean true , false
console.log(JSON.stringify(ourArray))

// in condition we equality and strict equality
/*
3 == '3'
3 === '3'
!=
!==
*/

// if condition

if(a==2){
    console.log("yes it is 2")
}
else if(a==3){
    console.log("yes it is 3")
}
else{
    console.log("don't know what it is")
}

/*

logiccally operator



*/


switch(a){
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    default:
        console.log("nothing")
}

// javascript objects  or json or like dictionary in python

var ourDog={
    "name":"camper",
    "legs":4,
    "tails":1
}

console.log(ourDog)
console.log(ourDog["tails"])

// while loop
var myArray=[]
var i=0
while(i<5){
    myArray.push(i)
    i++;
}
console.log(myArray)

// for loop

for(var i=0;i<7;i++){
    myArray.push(i);
}
console.log(myArray)
// loop control with break and continue


// parseInt function
function convertToInteger(str){
    return parseInt(str)
}

console.log(convertToInteger("101001"))

// tenary operator is also available like c++

// var declare globally or locally if declare in function
// let declare locally always
// try catch is also available like java

// anonymous function

var magic= () => new Date()

// rest operator js ...args

// cosntructing array
const [x,y,z]=[1,5,9]
console.log(z,x,y)
const arr=[1,7,8,9,0]
const [ , ,...lst]=arr
console.log(lst)

export const capitalizeString = str => str.toUpperCase() // export in one file
import {capitalizeString } from "./gettingStarted.js"    // import in another file
const cap =capitalizeString("hello sachin")
console.log(cap);

//  Cookies 
document.cookie = "key1 = value1;key2 = value2;expires = date";