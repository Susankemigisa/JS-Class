
// VARIABLES & SETUP
let a = 10;
let b = 3;

console.log("JavaScript Operators Explained");


// 1. ARITHMETIC OPERATORS
// These perform basic math operations
console.log("ARITHMETIC OPERATORS:");
console.log(`a + b  = ${a + b}   // Addition`);
console.log(`a - b  = ${a - b}   // Subtraction`);
console.log(`a * b  = ${a * b}   // Multiplication`);
console.log(`a / b  = ${a / b}   // Division`);
console.log(`a % b  = ${a % b}   // Modulus (remainder)`);
console.log(`a ** b = ${a ** b}  // Exponentiation (a to the power of b)`);


// 2. ASSIGNMENT OPERATORS
// These assign values to variables
console.log("ASSIGNMENT OPERATORS:");
let x = 5;
console.log(`x = 5            // Assigns 5 to x`);
x += 2;
console.log(`x += 2 → ${x}     // Adds 2 to x (x = x + 2)`);
x -= 1;
console.log(`x -= 1 → ${x}     // Subtracts 1 (x = x - 1)`);
x *= 3;
console.log(`x *= 3 → ${x}     // Multiplies by 3`);
x /= 2;
console.log(`x /= 2 → ${x}     // Divides by 2`);
x %= 4;
console.log(`x %= 4 → ${x}     // Remainder after dividing by 4`);
x **= 2;
console.log(`x **= 2 → ${x}    // Raises x to the power of 2`);

// 3. COMPARISON OPERATOR
// Used to compare two values
console.log(" COMPARISON OPERATORS:");
console.log(`a == '10'  → ${a == '10'}   // Equal value (loose)`);
console.log(`a === '10' → ${a === '10'}  // Equal value & type (strict)`);
console.log(`a != b     → ${a != b}      // Not equal`);
console.log(`a !== b    → ${a !== b}     // Not equal value or type`);
console.log(`a > b      → ${a > b}       // Greater than`);
console.log(`a < b      → ${a < b}       // Less than`);
console.log(`a >= b     → ${a >= b}      // Greater or equal`);
console.log(`a <= b     → ${a <= b}      // Less or equal`);

// 4. LOGICAL OPERATORS
// Used to combine conditions
console.log("LOGICAL OPERATORS:");
let isLoggedIn = true;
let isAdmin = false;

console.log(`isLoggedIn && isAdmin → ${isLoggedIn && isAdmin} // AND: both true?`);
console.log(`isLoggedIn || isAdmin → ${isLoggedIn || isAdmin} // OR: at least one true?`);
console.log(`!isAdmin              → ${!isAdmin}               // NOT: opposite of value`);


// 5. BITWISE OPERATORS
// Works on binary digits (bits)
console.log(" BITWISE OPERATORS:");
console.log(`a & b  = ${a & b}   // AND (bits)`);
console.log(`a | b  = ${a | b}   // OR (bits)`);
console.log(`a ^ b  = ${a ^ b}   // XOR (bits)`);
console

// TERNARY OPERATORS



// increment and decrement
let z = 5; z ++; 
let y = 4; y --;
console.log(z)
console.log(y)

let stockqty=2000; stockqty -= 2 //stockqty--;
console.log(`stock left is ${stockqty}`)




let productSold = 0; 
// productSold++;
// let message = `products sold are ${productSold}`
// console.log(message)

function recordProducts(){
    productSold++;
    let message = `products sold are ${productSold}`
console.log(message)
}

// console.log(recordProducts())

let qty = 5;
let payment = 50000;
let price = 50000;
if(qty>5 && payment>=price){ 
    console.log("product is available")
    console.log("discount applied")
}else{
    console.log("out of stock")
    console.log("can not process sale")
}




