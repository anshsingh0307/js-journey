function sayMyName(){
    console.log("A")
    console.log("n")
    console.log("s")
    console.log("h")
}
sayMyName()


/* 
function addTwoNumbers(num1 , num2){    here num1 and num2 are parameters since they are present in the definition of the function
    console.log(num1+num2)
}

addTwoNumbers(1,2)    here 1 and 2 are arguments since they are present in the calling of the functions
*/

function addTwoNumbers(num1, num2){
    console.log("Ansh")
    let result = num1 + num2 
    return result 
}

const result = addTwoNumbers(2, 5)
console.log("Result : ", result)



function Sum(num1, num2){
    console.log(num1+num2)
}

const ans = Sum(2, 3)          // this is undefined because mere function me humne direct print kara hai to ans me koi value save nai hogi
console.log(ans)
Sum(2,3)                         // ab print hoga kyuki function me already console.log() hai 


function loginUserMessage(username){
    if(username==undefined){
        console.log("Please enter your username .")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ansh"))

// ********* Rest operator **********
// When we dont know the number of inputs coming in the function , rest operator helps us to push them in an array (...)
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,500,700))

function calculateCartPrice2(val1 , val2 , ...num1){
    return num1 
}
console.log(calculateCartPrice2(500,2000,2445,2451,6425))


//Function with objects 

const user = {
    username: "ansh", 
    price: 199 
}

// how to pass this object in the function and how to use it ?

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username } and price is ${anyobject.price}`)
}

handleObject(user)