// const tinderUser = {}  // this is a non singleton object 

const tinderUser = new Object()  // this is a singleton object 

tinderUser.id= "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser)

const regularUser = {
    email: "ansh@gmail.com" ,                 // nesting in objects 
    fullname: {
        userfullname: {           
            firstname: "ansh" ,
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)



//Combining objects 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2}   // this is the wrong way to combine 
// const obj3 = Object.assign({} , obj1 , obj2)  //second way to combine

const obj3 = {...obj1 , ...obj2}  // third way i.e spreading wala concept (as we did in array)
//console.log(obj3)


const users = [                              // array of objects
    {
        id: 1 ,
        name: "ansh"
    },

    {
        id: 2 ,
        name: "janhvi"
    },

    {
        id: 3 ,
        name: "xyz"
    }
]
// console.log(users[1].name)

console.log(tinderUser)
console.log(Object.keys(tinderUser))   // return type = array  // returns the keys of object in the form of an array 
console.log(Object.values(tinderUser))  // returs the values

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  //tells if this key is present in the object or not