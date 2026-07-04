//function:It is a reusable block of code.
//which performs some action
//python example:
//function_name(arguments)
//js function example
//define the function
function greet(){
    //code to execute
    console.log("Welcome students")

} 
//calling the function, we can call any number of times
greet()


function greeting(name){

    console.log(`hello ${name}`);

}
//calling the function
greeting("Mastan")
//multiple parameters
function add(a,b){
    console.log(a+b)
}
add(2,3);

//return:send backs the value where the function is called
//function is called
function sub(a,b){
    console.log(a-b)
}
let result = sub(10,5)
console.log(result)

function square(num){
    return num*num
    console.log("Finished")
}
let square1 = square(5)
console.log(square1)
function test(){
    return "Hello";
    console.log("This code will never executes")
}
let test1 = test();
console.log(test1)

//variable scopes
//global variable
let college = "CITY";
function showCollege(){
    console.log(college)
}
showCollege();


//local variable
function showAge(){
    let age = 22;
    console.log(age);

}
showAge();
//Hoisting:
//JS moves declarations to the top
//before the execution
console.log(name1)
var name1 = "Mastan";

//How js sees exactly:
// var name;
// console.log(name1);
// name1 = "Mastan"
// console.log(age1)
// let age1 = 23;

//Hoisting with const
console.log()
const city="Hyd"

//Hoisting with functions
greeting1()

function greeting1(){
    console.log("hello")
}
//Functions are completely hoisted
//Function expression:
//store inside a variable 

//let result1 = greeting2()

let display = function(){
    console.log("Hello students")

}
//calling the variable
display()

//Hoisting the function expression
// test2()
// let test2 = function(){
//     console.log("Hi")
// }

//Example 2
let calculate_area = function(length,width){
    return length*width;

}

console.log(calculate_area(3,5))

let largest_number = function(a,b){
    if (a>b){
    return a;
    }
    else{
    return b;
    }
}
console.log("largest number is",largest_number(2,3));


const areaOfCircle = function(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
};

console.log(areaOfCircle(5));  
console.log(areaOfCircle(10)); 

//Arrays: Collection of elements of(similar datatypes)
//or
//Arrays: Collection of elements
//or
//Array is a collection of multiple elements stored in a
//arr = ["Mastan",3.14,true]
//let newArray = [value1,value2,value3] syntax for creating an array in javascript
let arr = ["Apple","Banana",3.14,true]
    console.log(arr[0])

let numbers = [10,20,30,40]
console.log(numbers[numbers.length-1])
//returns length
console.log(numbers.length)  


//modifying the element
numbers[0] = 9
console.log(numbers)
//Traversing
//for i in list
//print(i)
//Traversal: Visiting each and every element


//let fruits = ["Apple","Banana","Pine"]
//using for loop
//for (i=0;i<fruits.length;i++){
  //  console.log(fruits[i])
//}
//for ...of loop
//for(let fruit of fruits){
    //fruit is storing the current value
    // console.log(fruit)
//}

// let num = [10,20,30,40,50]
// let total = 0
// for(i=0;i<num.length;i++){
//     total += num[i]

// }
// let arr = [12, 45, 7, 89, 23];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("Largest element is:", largest);

//push--adding element
// arr.push(5)
// console.log(arr)

//multiple values at a time
// arr.push(10,20)
// console.log(arr)

//removes the last element
// arr.pop()
// console.log(arr)

//restoring the removed element
// let removed = arr.pop();
// console.log(removed);

//remove the first element
// let firstremoved = arr.shift();
// console.log(firstremoved);

//add element at the beginning
// arr.unshift(10);
// console.log(arr);

//python--slicing
//arr[start:end:step]
//splice() in js
//used for --1 adding elements 2 deleting elements 3 replacing
//Syntax:
//Array.splice(start_index,delete_index,new_values)
//Example:
let veggies = ["Carrot","Beetroot","Brinjal"]
veggies.splice(1,1)
//1 -->startindex
//2 -->deleteindex
console.log(veggies)

//adding element
veggies.splice(1,0,"Bitter Guard")
console.log(veggies)

//replacing element
veggies.splice(1,1,"Bottle Guard")
console.log(veggies)

//slice -->creates a copy of a portion of array
//array.slice(start,end)

//copy entire array
// let nums = [10,20,30,40,50]
// let result1 = nums.slice()
// console.log(result1)

//Task:arr=[10,20,30,40,50,60]
//create a new array containing elements from index 2-4
// let arr = [10, 20, 30, 40, 50, 60];

// let newArr = arr.slice(2, 5); 
// console.log(newArr); 

//String:sequence of characters closed in '',"",``
// let name = "Mastan";
// let name1 = "Mastan";
// let name2 = "Mastan";

//indexing in strings:starts from 0
// let str = "Hello"
    //     01234
// console.log(str[0]) 
// console.log(str[1]) 
// console.log(str[2]) 

//string length
// console.log(str.length)

//Strings are immutable that is why characters are not changed
// str[0]="M"
// console.log(str)

//Traverse over the string
// for(i=0;i<str.length;i++){
//     console.log(str[i])
// }
//for--of
// for(let ch of str){
//     console.log(ch);
// }
//String methods
let firstName = "Mastan"
console.log (firstName.toUpperCase());
console.log (firstName.toLowerCase());

//Removing the extra spaces

let hello = "bye";
console.log(hello.trim());
//includes()
let course = "JavaScript";
console.log(course.includes("Script"))

//startwith
firstName.startsWith("M")
console.log(firstName.startsWith("M"))
//ends with
console.log(firstName.endsWith("n"))

//indexof
console.log(firstName.indexOf("M"))


//lastindexof
console.log(firstName.lastIndexOf("a"))

//replace():
let str1 = "I love JavaScript"
console.log(str1.replace("javascript","python"))
console.log(str1)

//replaceAll():
let str2 = "cat dog cat"
console.log(str2.replaceAll("cat","Lion"));

//slice
console.log(course.slice(0,3));

//substring
let str3 = "Programming"
console.log(str3.substring(3,8));

//split():
let str4 = "HTML,CSS,JS,REACT"
console.log(str4.split(","));

//charAt:
console.log(str4.charAt(4));

//concat():
// let first = "Mastan"
// let last = "Shareef"
// console.log(first.concat(" ",last));
//objects:is a collection of key:value pair
let student ={
    name:"Mastan",
    rollno:8,
    course:"Mern"
    // is_permanent :true,
    // gree
};
console.log(student)
// let name="mastan"
// let rollno="9"
// let course="Mern"
console.log(student.name)
console.log(student.rollno)
console.log(student["course"])

//Add a new property
student.city="Guntur"
console.log(student.city)


//update the value
student.rollno = 9;
console.log(student.rollno)

//delete the property
// student.delete.city;
delete student.city;
console.log(student)

//task:
// Create an object named employee
const employee = {
    name: "Anand",
    age: 25,
    city: "Guntur",
    salary: 40000,

    // Function expression inside the object
    displayDetails: function () {
        console.log("Employee Name:", this.name);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);
    }
    
};

// Update salary to 45000
employee.salary = 45000;

// Remove city property
delete employee.city;

// Call the function outside the object
employee.displayDetails();

// Display updated object
console.log(employee);


//nested objects
// address:{
//     city:"Hyd",
//     state:"TG",
//     pincode:123456

// }

//for..in loop
for(let key in employee){
    console.log(key,employee[key])
}


//only keys
console.log(Object.keys(employee))

//only values
console.log(Object.values(employee))


//in a list format
console.log(Object.entries(employee))


//for..of
for(let[key,value] of Object.entries(employee)){
    console.log(key,value);
}
