//Properties
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log("my file is connected")

//major methods
let heading = document.getElementById("heading")
console.log(heading)
heading.textContent = "WELCOME TO MAYONDO WOOD AND FURNITURE"
heading.style.color = "red"


let header = document.getElementById("first")
Header.innerHTML = "<h2> for quality furniture products</h2>"

//events

//more dom methods
let subHeadings = document.getElementByTagName("h2")
console.log(subHeadings)

for (let i=0; i< subHeadings.length; i++){
console.log(subHeadings[i])
}




let paragraph = document.getElementsByTagClassName("about")
console.log(paragraph.length)

//  let thirdTitle= document.querrySelector("h3")// ths works exactly like css, it selects the first available element
//  let thirdTitle = document.querrySelector("#third_title") 
//  let thirdTitle =document.querrySelector(".thirdTitle")// it selects the firdt available elemnt with class name third Title


let headingArray = document.querySelectorAll("h2")// this captures everything
headingsArray[1].className = "container"
headingsArray[1].id = "sub_headings";

headingsArray[1].setAttribute("class" ,"container") 
headingsArray[1].setAttribute("id", "subheadings")
headingsArray[1].textContent = "login"
headingsArray[1].style.backgroundColor = "blue"


document.createElement()






