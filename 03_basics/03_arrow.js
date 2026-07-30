const user = {
    username: "ansh",
    price: 999,

    welcomeMessage: function(){
            console.log(`${this.username} , welcome to website .`)   
            console.log(this)       // "this" refers to the current context 
    }
}

user.welcomeMessage()
user.username = "Her>>"
user.welcomeMessage()


console.log(this)  // yaha pe hume khali(empty) object milega since we dont have any global object , but browser me iski value windows aayegi


function chai(){
    let username = "ansh"
    console.log(this.username);    // we got undefined hence we cant use "this" inside a function , we use it in objects 
}
chai()


const yewoh = function(){
    let username = "ansh"
    console.log(this.username)      // again we got undefined
}
yewoh()


// ********** Arrow function *************
const huhu = () => {
    let username = "ansh"
    console.log(this)
}
huhu()


const sum = (num1,num2) => {
    return num1+num2
}
console.log(sum(2,5))

// Second way ---->>> const sum = (num1,num2) => (num1+num2)                   this is called implicit return 