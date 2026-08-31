//Data types are of two types :-
// 1. Primitive (Call by value)
// It has 7 types -->>>> String , Number , Boolean , null, undefined , Symbol , BigInt

const score=100 
const scorevALUE = 100.3 

const isLoggedIn=false 
const outsideTemp=null
let userEmail ;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)

// 2.Non Primitive (Or Reference type)
// Examples -->>> Arrays , Objects , Functions
//Return type of the typeof operator of non primitive data types is Object .
 
const heros = ["ansh" , "yashveer" , "rudra" ,  "hasan" ]
let myObj = {
    name : "hitesh",
    age : 22 ,
}

const myFunction= function(){
    console.log("Hello world");
}

myFunction();