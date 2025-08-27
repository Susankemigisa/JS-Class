//  Require vs Import

// In ES5 (CommonJS):

// Require
const fs = require('fs');
const myModule = require('./myModule');


// Loads modules synchronously (good for backend, slower for frontend).

// Used mostly in Node.js before ES6 modules.

// In ES6:

// Import
import fs from 'fs';
import { readFile } from 'fs';


// Loads modules statically (at compile time).

// Works with tree-shaking (unused code removal → smaller bundles).

// Works natively in browsers (with <script type="module">).

//  Rule of thumb: Use import/export in modern JavaScript, require only if you’re working in older Node.js environments.

// Export Types (Default vs Named)
// 1. Default Export

// One default export per file.

// Imported with any name you choose.

// file: math.js
export default function add(a, b) {
  return a + b;
}

// file: app.js
import sum from './math.js';
console.log(sum(2,3)); // 5


// Export Types (Default vs Named)
// 1. Default Export

// One default export per file.

// Imported with any name you choose.

// file: math.js
export default function add(a, b) {
  return a + b;
}

// file: app.js
import sum from './math.js';
console.log(sum(2,3)); // 5

// 2. Named Export

// Multiple exports per file.

// Must be imported with their exact names (or aliased).

// file: math.js
export const add = (a,b)=> a+b;
export const subtract = (a,b)=> a-b;

// file: app.js
import { add, subtract as sub } from './math.js'

console.log(add(2,3)); // 5
console.log(sub(5,2)); // 3


// Default → main thing a file provides.
// Named → multiple utilities/helpers.

// Destructuring Assignment

// Extract values from arrays or objects into variables easily.

// Array Destructuring
const arr = [10, 20, 30];
const [x, y] = arr;

console.log(x); // 10
console.log(y); // 20

//Object Destructuring
const person = {name: "Alice", age: 25};
const {name, age} = person;

console.log(name); // Alice
console.log(age);  // 25

//With Defaults + Aliases
const {name: fullName, country="Uganda"} = {name: "Joan"};

console.log(fullName); // Joan
console.log(country);  // Uganda

//  Spread & Rest Operators (...)
// 1. Spread (expands arrays/objects)

// Useful for copying, merging, or passing values.

// Arrays
const nums = [1,2,3];
const more = [...nums, 4, 5]; 
console.log(more); // [1,2,3,4,5]

// Objects
const obj1 = {a:1, b:2};
const obj2 = {...obj1, c:3};
console.log(obj2); // {a:1, b:2, c:3}

// Function arguments
function sum(a, b, c) { return a+b+c; }
console.log(sum(...[1,2,3])); // 6

//2. Rest (collects multiple values into one variable)

//Useful in function parameters or destructuring.

// Function params
function printAll(...args) {
  console.log(args);
}
printAll(1,2,3,4); // [1,2,3,4]

// Destructuring
const [first, ...others] = [10,20,30,40];
console.log(first);   // 10
console.log(others);  // [20,30,40]


//  Quick Summary:

// ES5 = older (var, require, prototypes).

// ES6 = modern (let/const, import/export, classes, promises, destructuring, spread/rest).

// Require vs Import = CommonJS vs ES6 modules.

// Default vs Named Export = single main export vs multiple.

// Destructuring = extract values easily.

// Spread/Rest = expand or collect values.

// Do you want me to also make a practical example combining all these features together in one mini project (like a small ES6 module with exports, destructuring, and spread/rest)?

// Is this conversation helpful so far?