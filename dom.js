// //selecting the elements
// let heading = document.getElementById("title");
// console.log(heading)

// //2nd method
// //Query selector():
// //Return the first matching element
// //id,class,tag

// let heading1 = document.querySelector("#title");
// console.log(heading1)

// //Selecting by class
// let Bio = document.querySelector(".bio");
// console.log(Bio)

// //Selecting by tagname
// let head2 = document.querySelector("h2");
// console.log(head2)

// //Selecting all same tags
// let paragraphs = document.querySelectorAll("p");
// console.log(paragraphs)

// //Loop through
// paragraphs.forEach((item)=>{
//     console.log(item.innerText);
// });
// //Manipulation:Change the text
// heading.innerText = "Welcome to chalapathi"

// //Reading the element
// console.log(
//     document.getElementById("title").innerText
// );
// //Read the HTML
// console.log(
//     document.getElementById("title").innerHTML
// );

document.getElementById("course").innerHTML="JavaScript"

//Changing multiple elements
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((para)=>{
    para.innerText = "all";

});
//JS can change css also
function changeStyle(){
    let heading = document.getElementById("title")
    heading.style.backgroundColor = "violet";
    heading.style.fontSize = "40px";
//Border
    heading.style.border= "3px solid red";
    heading.style.width ="300px";
}
//Task: Theme switcher--Black and White
function white (){
    let body = document.querySelector("body")   
    body.style.backgroundColor = "white";
    body.style.color = "black";
    document.getElementById("title").style.color = "Green";
}
function color(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "black";
    body.style.color = "white";
    document.getElementById("title").style.color = "yellow";
}
