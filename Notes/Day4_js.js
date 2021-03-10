var a = "masai"; //simple string

var n = 23;

var objA = {
  name: "masai",
};

var objB = Object.create(objA); //it creates copy

objB.name = "masai school";

console.log(objB.__proto__.name);


// arr > Array.prototype > Object.prototype > null
// n > Number.prototype > Object.prototype > null
// test > Function.prototype > Object.prototype > null

//Evrything in Js is an object

//Object.prototype

//a.print();
//n.print(); //a=this



/*
function iphone11() {
  this.name = "iphone 11";
  this.year = 2021;
  this.random = "test";
} //blueprint

iphone11.prototype.FaceId = function () {
  this.hello = "Hello from iphone1";
};

iphone11.prototype.fourK = function () {
  console.log("Has a FOURK");
};

var iphone1 = new iphone11();
var iphone2 = new iphone11();
var iphone3 = new iphone11();
var iphone4 = new iphone11();

iphone1.FaceId();

console.log(iphone1);

/*

//Usimg constructor functions

function Animal(x) {
  this.eats = true;
  this.name = x;
} //blueprint

Animal.prototype.showName = function () {
  console.log(this.name);
};

//Use methods on prototype and properties define them on constructor function
//concept of prototype

var cat = new Animal("Cat");
var dog = new Animal("Dog");
var lion = new Animal("Lion");

console.log(cat, dog, lion);

/*

var objectA = {
  intro: "Hello, I am Object A",
  random:
    "I am created using object literal and I am on top of prototype chain",
}; //Object literal

var objectB = Object.create(objectA); //Object.create()

//doesnt copy values into the new object
//inside __Proto__object

objectB.intro = "Hello, I am from object B";

var objectC = Object.create(objectB);

objectC.intro = "Hello, I am object C";

console.log(objectC);
*/
