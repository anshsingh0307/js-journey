// Singleton  (constructor se banega to singleton banega)
//Object.create


const mySym = Symbol("key1")

// Object literals (Ways to make an object) (Way-1)
const JS_user = {
    name: "Ansh" ,
    "full name": "Ansh Singh" ,
    [mySym]: "myKey1" ,
    age: 21 ,
    email: "ansh@gmail.com" ,
    isLoggedIn: false ,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JS_user.email)
console.log(JS_user[mySym])

JS_user.email="anshhhh@gmail.com"  //way to change the data

// Object.freeze(JS_user) // This does not allow any changes in the objject , iske baad object me koi change nahi aayega

JS_user.greeting = function(){
    console.log("Helo JS user");
}

JS_user.greetingTwo = function(){
    console.log(`Helo JS user , ${this.name}`);
}

console.log(JS_user.greeting())
console.log(JS_user.greetingTwo())

