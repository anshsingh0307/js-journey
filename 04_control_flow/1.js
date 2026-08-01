// if

const isUserLoggedIn = true 
const temperature = 41
if(2 === "2"){
        console.log("Executed .")                         //The === sign also checks the data type and then compares and returns true or false 
}

if(temperature<50){
    console.log("Less than 50")
}

const score = 200 
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`)
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = true 
const loggedInFromEmail=false 

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle || userLoggedIn){
    console.log("User can login .")
}