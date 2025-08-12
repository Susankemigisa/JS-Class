//JavaScript Operators - Explained with Code Examples

//Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 10 + 3 = 13
console.log("Subtraction:", a - b);     // 10 - 3 = 7
console.log("Multiplication:", a * b);  // 10 * 3 = 30
console.log("Division:", a / b);        // 10 / 3 = 3.333...
console.log("Modulus (Remainder):", a % b); // 10 % 3 = 1
console.log("Exponentiation:", a ** b); // 10^3 = 1000


//Assignment Operators
let x = 5;

x += 2;  // x = x + 2 → 7
console.log("After += 2:", x);

x -= 1;  // x = x - 1 → 6
console.log("After -= 1:", x);

x *= 3;  // x = x * 3 → 18
console.log("After *= 3:", x);

x /= 2;  // x = x / 2 → 9
console.log("After /= 2:", x);


//Comparison Operators
let p = 10;
let q = "10";

console.log("p == q:", p == q);     // true (only value is compared)
console.log("p === q:", p === q);   // false (value and type are compared)
console.log("p != q:", p != q);     // false
console.log("p !== q:", p !== q);   // true
console.log("p > 5:", p > 5);       // true
console.log("p < 5:", p < 5);       // false
console.log("p >= 10:", p >= 10);   // true
console.log("p <= 9:", p <= 9);     // false


// Logical Operators
let isPaid = true;
let isDelivered = false;

console.log("isPaid && isDelivered:", isPaid && isDelivered); // false
console.log("isPaid || isDelivered:", isPaid || isDelivered); // true
console.log("!isDelivered:", !isDelivered);                   // true


// String Operator
let brand = "Mayondo";
let product = "Furniture";

let fullName = brand + " " + product;
console.log("Concatenated string:", fullName); // "Mayondo Furniture"


// Type Operator
let amount = 50000;

console.log("typeof amount:", typeof amount);       // "number"
console.log("typeof fullName:", typeof fullName);   // "string"


// Bonus - Used in MWF Example

// Calculate total with quantity and transport
let unitPrice = 100000;
let quantity = 3;
let subtotal = unitPrice * quantity;

let transportFee = subtotal * 0.05;
let grandTotal = subtotal + transportFee;

console.log("Subtotal:", subtotal);
console.log("Transport (5%):", transportFee);
console.log("Grand Total:", grandTotal);

// Apply discount using -= operator
let discount = 20000;
grandTotal -= discount;
console.log("After Discount:", grandTotal);

// Use comparison and logical to make decisions
if (quantity >= 3 && grandTotal > 200000) {
  console.log("Apply free delivery.");
}

if (!isDelivered) {
  console.log("Prepare product for delivery.");
}