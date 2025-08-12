//write a function
function functionName(){
//write any code here
//use return or
//console.log 
}
// call the function to do its work
functionName()

function functionName(parametr){
//write any code here
//use return or console.log
}
functionName(arguments)


function addtwoNumbers(){
let x = 5;
let y = 7;
let sum = x+y;
console.log(sum);
return sum;
}
console.log(addtwoNumbers())
function addtwoNumbers(x,y){
let sum = x+y;
return sum;
}
console.log(addtwoNumbers(20,8));
console.log(addtwoNumbers(12,7));
console.log(addtwoNumbers(2,22));
console.log(addtwoNumbers(8,81));
console.log(addtwoNumbers(122,53));

//write a function to square any number
function squareNumber(x){
    return x*x;
}
console.log(squareNumber(20));
console.log(squareNumber(33));
console.log(squareNumber(24));
console.log(squareNumber(44));
console.log(squareNumber(23));
console.log(squareNumber(56));


//calculating totalcost
function calculateTotalCost(quantity,unitPrice){
        const transportFee = 5000
    let subTotalCost = quantity * unitPrice
    let total = subTotalCost + transportFee
    return total
}
console.log(calculateTotalCost(2,350000));



let totalBeforeVat = calculateTotalCost(2,3500);
function calculatePriceAfterTax(total){
    const vat = 0.18
    let vatFee = total * vat
    let priceAfterTax = total - vatFee
    return {priceAfterTax, vatFee};
}
console.log(calculatePriceAfterTax(totalBeforeVat))


//function with strings

function printFullName(){
    let firstName = "Susan";
let lastName = "Kemigisa";
let space = " "
    let fullName = firstName + space + lastName
return fullName
}
console.log(printFullName())

//functions with arrays
let actions = [function greet(){
    console.log('hello')
},
function calculate(){
    console.log(1+1)
},
function thankYou(){
    console.log('thank you for using my system')

}]

actions[0]();
actions[1]();
actions[2]();
console.log (actions)
//using functions inside objects

let unitPrice
let quantity
let address
let productName
let transportFee
let vatFee
let paymentMention
let calculateSubPrice
let calculateUnitPrice

let order = {
    unitPrice: 300000,
    quantity: 3,
    calculatesubTotal: function(){
        return this.unitPrice + this.quantity
    }

}
order.unitPrice
order.quantity
order.calculatesubTotal()


let car = {
    name:"rangerover",
    weight: 1000,
    start: function(){
        return 'vroom'
    }
}
car.name
car.weight
car.start()
console.log(car.name + car.weight)

function calcTotalCost(quantity,unitprice){
    let totalcost = quantity * unitprice
    return totalcost
}
console.log(calcTotalCost(5,2000))

function getTotalCost(){
    let quantity = 5
    let unitPrice = 2000
    let totalcost = quantity * unitPrice
    return totalcost
}

console.log(getTotalCost())


let addTotalCost  = {
    quantity : 5,
    unitPrice : 2000,
    toatalcost : function(){
        return this.quantity* this.unitPrice
    }

}

console.log(addTotalCost.toatalcost())
