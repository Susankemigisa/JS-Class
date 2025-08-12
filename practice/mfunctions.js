//1.Declaration functions
//Calculating transport fee:

function calculateTransportFee (totalPrice){
    return totalPrice * 0.05;
}
console.log(calculateTransportFee(10000));



//2.Expression function.
//If stock is available

const stockisAvailable = function (quantity){
  return quantity > 0;
};
console.log(stockisAvailable(20));

//3.Anonymous Function
//Used as a callback when updating stock:

setTimeout(function(){
  console.log("stock updated successfully.")
}, 1000);

//4.Arrow function
//Displaying sales agent name:

const showAgent = (agentName) => {
  console.log("Sales Agent:",agentName);
};
showAgent("Joseline");

//5.Function without Parameters and Return
//logs report message:

function printSalesReportMessage(){
  console.log("Generating sales report");
}
printSalesReportMessage();


//6.Function Returning a value ,
// Calculating total price of a sale:

function calculateTotal(quantity , price){
  return quantity * price;
}
let total = calculateTotal(4, 140000);
console.log("Total:",total);

//7.Function with Parameters,
//  creating a receipt:

function generateReceipt(customerName, product, quantity, price, paymentType) {
  console.log(`Receipt for ${customerName}:
  Product: ${product}
  Quantity: ${quantity}
  Total: ${quantity * price}
  Payment: ${paymentType}`);
}

generateReceipt("Lynn", "Dining Table", 4, 200000, "cheque");

//Arrow Function with Unlimited Parameters, 
//Listing products sold in one transaction:

const listProducts = (...products) => {
  console.log("Products Sold:");
  products.forEach(product => console.log(product));
};
listProducts("Drawer", "Chair", "cupboard");

//Self-Invoking Function,
//Used for initializing the app:
(function (){
  console.log("MWF System Initialized");
})();


//Scope Functions
//Understanding local vs global

let companyName = "MWF";

function showCompany(){
  let message = "Welcome to " + companyName;
  console.log(message);
}
showCompany();
//console.log(message); //Error is not defined (scope)