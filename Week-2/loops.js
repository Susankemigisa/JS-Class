//for loop
//  fixed repeatitions loop through a list
for (let i = 0; i<4; i++) {
    console.log(i) ;
} 
// for (initialization;condition;increment/decrement) : for loops
// initialize; if(condition) {code if true}
//When do we use the for loop?


/**Examples of loops
 1. for
 2.for--of
 3..for--in
 4.forEach()
 5.while
 6.do--while
 */

 const products =["chair","table","cupboard","wardrobe"]

 for (i=0;i< products.length; i++) {
    console.log(`item ${i+1}: ${products[i]}`);
 }

 //WHILE LOOP 
 // repeats until the condition
 //while (conditon){code if condition is true;increment/decrement}
 let stock =20;
 while (stock>0){
    console.log(`selling item--stock left is ${stock}`);
    stock--;
 }
 //DO--WHILE
//  do{
//     // code to run atleast once
//  }while (condition);

// let order;
// let totalstock =1000

//  do{
//    order =prompt(Enter order(Available stock is ${totalstock}):) 
//  } while(order < totalstock);
//  {
//     alert(Your order has been received);
//     // stock--;
//  }

//  let payment;
// let totalDue =500000

//  do{
//    payment =Number(prompt(Enter payment(Total UGX: ${totalDue}):) );
//  } while(payment > totalDue);
//  {
//     alert(Your payment has been received);
//  }
/**
 * SYNTAX
 * do{code to be executed atleast once before iteraction}
 * while(condition)
 */
let x= 0;
do {
    console.log(x);
    x++;
}
while(x<=5);

//FOR--OF
const itemSold =["chair","table","cupboard"];
for(const item of itemSold) {
    console.log(`sold${item}`);
}

/*
 * PITFALLS OF LOOPS
 * 1.infinite loops
 */


const sale ={
    customerName:"Keilar",
    product:"Sofa",
    quantity:2,
    price:500,
}
//FOR IN LOOP
for(const key in sale){
    console.log(`${key}:${sale[key]}`)
}