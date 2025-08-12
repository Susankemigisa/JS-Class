// function functionName(){
// //write any code here
// //use return or
// //console.log 
// }
// functionName()

// function functionName(parametr){
// //write any code here
// //use return or console.log
// }
// functionName(arguments)


// function addtwoNumbers(){
// let x = 5;
// let y = 7;
// let sum = x+y;
// return sum;
// }
// console.log(addtwoNumbers())

// function addtwoNumbers(x,y){

// let sum = x+y;
// return sum;
// }
// console.log(addtwoNumbers(20,8));
// console.log(addtwoNumbers(12,7));
// console.log(addtwoNumbers(2,22));
// console.log(addtwoNumbers(8,81));
// console.log(addtwoNumbers(122,53));

// //write a function to square any number
// function squareNumber(x){
//     let sum = x*x
//     return sum 
// }
// console.log(squareNumber(20));
// console.log(squareNumber(33));
// console.log(squareNumber(24));
// console.log(squareNumber(44));
// console.log(squareNumber(23));
// console.log(squareNumber(56));

// let squareNumber = function(x){
//     return x*x;
// }

//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object

function createSoda(flavor,brand,color){
    return {
        flavor: flavor, 
        brand: brand,
        color: color,
        cocacola: function(){
    return this.flavor+"this is strawberry"
    },
     pepsi: function(){
        return this.brand+"this is a cock brand"
    },
mirinda: function(){
    return this.color+"green"
},
}}
let cocacola = createSoda("strawberry", "fanta","brown")
let pepsi = createSoda("vanilla","cock","black")
let mirinda = createSoda("apple","riham","green")
console.log(cocacola);
console.log(pepsi);
console.log(mirinda);



//find out the differences between function diclrations and function expressions
// what are the limitations of using function expressions over function declarations
// advantages of using function expressions over function declarations