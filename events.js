//Selecting of elements
let button = document.querySelector("button")
//console.log(button)
let form = document.getElementById("loginForm");
let course = document.getElementById("course");
let Picker = document.getElementById("colorPicker");
let input = document.getElementById("username");
let count = document.getElementById("count");
let circle = document.getElementById("circle");



//DOM manipulation
function showMessage(){
    alert("Hello")
};
function login(){
    //Help you to stop page reload
    event.preventDefault();
    alert("form submitted")
};
//Change--> Occur when the event is changed


//Event Listeners
//External Events
button.addEventListener("click",showMessage);
form.addEventListener("submit",login);

//Change event
course.addEventListener("change",function(){
    let current_value = course.value;
    console.log(course.value)
});
//Color picker
Picker.addEventListener("change",function(){
    document.body.style.backgroundColor
    =Picker.value;
});
//keyup event -->when the user releases the key
input.addEventListener("keyup",function(){
    console.log(input.value)
});
//Count the number of characters in the input field
input.addEventListener("keyup",function(){
    count.innerText = input.value.length;
})