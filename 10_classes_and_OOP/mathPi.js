const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

console.log(Math.PI)
Math.PI = 5 
console.log(Math.PI)                        // value of pi didnt change


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true, 

    orderChai: function(){
        console.log("Chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
//now we will alter the properties
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


//how to iterate in an object
for (let [key, value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
    console.log(`${key}: ${value}`);
    }
}
// jis property pe humlog enumerable = false lagate h wo iteratable nahi hote h object me