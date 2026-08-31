// let myName = "ansh       "
// console.log(myName.truelength)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ansh = function(){
    console.log(`ansh is present in all objects`)
}
heroPower.ansh()
myHeros.ansh()

Array.prototype.heyAnsh = function(){
    console.log(`Ansh says hello `)
}

myHeros.heyAnsh()
// heroPower.heyAnsh()



//*************** Inheritance **************** 

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.truelength()

