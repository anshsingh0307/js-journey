const user = {
    username: "Ansh Singh",
    loginCount: 8,
    signedIn: true, 

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)                                        //"this" is an object, it tells the current context
    }
}
console.log(user.username)
console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    //return this ;
}


const userOne = new User("Ansh", 12, true)               // new is a constructor function that gives new instances
const userTwo = new User("Janhvi", 12, false)
console.log(userOne)
console.log(userTwo)