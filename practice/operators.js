//VARIABLES AND VALUES
let productName = "Office Desk";        // String (text value)
let stock = 3;                          // Number (stock quantity)
let costPrice = 300;                   // Buying price
let sellingPrice = 450;               // Selling price per item
let saleQuantity = 2;                 // How many were sold
let customer = "Keilah Ltd";        // Customer name
let salesAgent = "Pream";              // Staff who made the sale

//ARITHMETIC OPERATORS
// Calculate total sale value
let total = sellingPrice * saleQuantity;
console.log( {total});  // Output: UGX 900

//ASSIGNMENT OPERATORS
// Reduce stock after sale
stock -= saleQuantity;  // same as: stock = stock - saleQuantity
console.log({stock});  // Output: 1

//COMPARISON OPERATORS
// Check if enough stock was available before sale
let isStockEnough = stock >= 0;
console.log({isStockEnough});  // true or false

// LOGICAL OPERATORS
// Let's say we only approve sale if stock is enough AND total > 500
let saleApproved = isStockEnough && total > 500;
console.log({saleApproved});

// //BITWISE OPERATOR (just for demonstration)
// // Bitwise AND between cost and selling price
// let bitwiseResult = costPrice & sellingPrice;
// console.log({bitwiseResult});

// //FULL SALE REPORT
// console.log("SALE REPORT ");
// console.log(`Customer      : ${customer}`);
// console.log(`Product       : ${productName}`);
// console.log(`Quantity Sold : ${saleQuantity}`);
// console.log(`Total         : UGX ${total}`);
// console.log(`Payment Type  : Bank Transfer`);
// console.log(`Sales Agent   : ${salesAgent}`);
// console.log(`Date          : ${new Date().toLocaleString()}`);
