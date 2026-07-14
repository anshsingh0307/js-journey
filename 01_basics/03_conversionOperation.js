let score = "33abc" // make sure to try this for null , undefined , "ansh" and true .

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) // here we converted the data type of "score" from string to number . Make sure the n is capital in Number
console.log(typeof valueInNumber)
console.log(valueInNumber)  //Nan means not a number .

// Conversion in Number
// "33"=>33
// "33abc"=>NaN
// true=>1 ; false=>0 

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let ansh=""
let booleanAnsh=Boolean(ansh)
console.log(booleanAnsh)

let ansh2="Ansh"
let booleanAnsh2=Boolean(ansh2)
console.log(booleanAnsh2)

// Conversion in Boolean
// 1=>true ; 0=>false
// "" => false
// "ansh" => true

//conversion in string
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)



// *********************Operations*********************
let value=3
let negativeValue=-value
console.log(negativeValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // 2 to the power 3 
console.log(3/2)
console.log(3%2)


let str1="hello"
let str2=" ansh"
let str3=str1 + str2 
console.log(str3)


//Now something tricky
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

let gameCounter = 100
gameCounter++
console.log(gameCounter)
