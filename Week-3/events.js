/* what are Events?
       means actions, notifications, signals, trigers to tell that something has happened in the system( a trigered action by a user or browser which can result into signals,notifications....)*/
       /*Key words  used in events
       1. Event listening: its like watching or listening to an event  and when they happen they click or trigger(add to buttons an event listening, buttons.click.events)
       2. Event handling: its the function that happens after you have listened*/

    //    let buttton = document.getElementById("click");// for selecting the button

    //    buttton.addEventListener("click", function(){// adding click event listener(adding a function to a button)
    //     alert("You have clicked the button");
    //    })

//        let price = document.getElementById("price").value;
//        let qty = document.getElementById("qty").value;
//        let total = document.getElementById("total");
//        let calcBtn = document.getElementById("calcBtn")
// function updateTotal(){
//     let cost = Number(price) * Number(qty);
// // cost.toLocaleString();
//     total.textContent = `total: UGX ${cost}`
// return;
// };


// calcBtn.addEventListener("click", updateTotal);



// let total = document.getElementById("total");
// let calcBtn = document.getElementById("calcBtn");

// function updateTotal() {
//     let price = document.getElementById("price").value;
//     let qty = document.getElementById("qty").value;

//     let cost = Number(price) * Number(qty);
//     total.textContent = `Total: UGX ${cost.toLocaleString()}`;
// }

// calcBtn.addEventListener("click", updateTotal);


const form = document.getElementById("orderForm");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal() {
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);

    const cost = price * qty;
    total.textContent = `Total: UGX ${cost.toLocaleString()}`;
}

// calcBtn.addEventListener("click", updateTotal);
qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal)

