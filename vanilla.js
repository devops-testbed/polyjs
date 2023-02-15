const a = 10;
let b = 5;
var c = 'hello';
const arr = [1, 2, 3];
const obj = {x: 1, y: 2};

//Prototype-based inheritance

function Personf(name, age) {
    this.name = name;
    this.age = age;
}

Personf.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

const person = {
    name: "Jane",
    age: 25,
    greet: function () {
        if (b > 18) {
            console.log("${this.name} is an adult"); //string interpolation
        } else {
            console.log("${this.name} is a minor"); //template literals
        }
    }
}

const updatedPerson = {
    ...person,
    age: 31,
    address: {
        street: "123 Main St",
        city: "Anytown",
    }
};
// Destructure object properties
const {name, age, address: {city}} = updatedPerson;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Destructure array elements
const [first, second, third] = arr;
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);


// Define a function
function printPersonInfo() {
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }

    for (const value of Object.values(person)) {
        console.log(value);
    }

    try {
        // Try to access a non-existent property to trigger an error
        console.log(person.address);
    } catch (error) {
        console.log("Error: " + error);
    }

    const occupation = "programmer";
    switch (occupation) {
        case "teacher":
            console.log("Teaching");
            break;
        case "engineer":
            console.log("Engineering");
            break;
        case "programmer":
            console.log("Programming");
            break;
        default:
            console.log("Unrecognized occupation");
    }
}

// Call the function
printPersonInfo();

// Loops
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(number => {
    console.log(number);
});

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
        return Infinity;
    }
    return a / b;
}

const arrowFunction = (param) => console.log(param);

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done');
    }, 1000);
});
promise.then(result => console.log(result));

async function asyncFunction() {
    const result = await promise;
    console.log(result);
}

// Use rest parameter syntax
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);


arrowFunction('world');
console.log(a + b);
console.log(c.toUpperCase());
console.log(arr.map(x => x * 2));
console.log(obj.y);
asyncFunction();


//Regular expressions
const regex = /hello/;
const str = "hello world";
console.log(regex.test(str));

//Array methods (e.g., filter, reduce, map)
const filteredArr = arr.filter(x => x > 2);
const reducedArr = arr.reduce((total, num) => total + num, 0);
const mappedArr = arr.map(x => x * 2);
console.log(`Filtered array: ${filteredArr}`);
console.log(`Reduced array: ${reducedArr}`);
console.log(`Mapped array: ${mappedArr}`);


//Immediately-invoked function expressions (IIFE)
(function () {
    console.log("Hello world");
})();//IIFE

//Closures
function outerFunction() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const inner = outerFunction();
inner();

//Currying
function multiply(a) {
    return function (b) {
        return a * b;
    }
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3));

//Hoisting
console.log(a1);
var a1 = 10;


//Generators
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Modules
//import { sum } from './math.js';
//console.log(sum(1, 2, 3, 4, 5));

//ES6 classes with inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    static compareAge(person1, person2) {
        return person1.age - person2.age;
    }
}
//ES6 classes with static methods
const person1 = new Person("Sara", 25);
const person2 = new Person("John", 30);
console.log(Person.compareAge(person1, person2));

class Programmer extends Person {
    constructor(name, age, languages) {
        super(name, age);
        this.languages = languages;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I know ${this.languages.join(', ')}.`);
    }
}

const pers = new Person("Sara", 25);
pers.greet();
const prog = new Programmer("John", 30, ["JavaScript", "Python"]);
prog.greet();



