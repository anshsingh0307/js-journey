const score = 400 
console.log(score)

const balance = new Number(400) //to explicitly convert something in number 
console.log(balance)
// We saw a difference in the output 

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 1123.5478
console.log(otherNumber.toPrecision(3)) //Priority decimal ke pehle ke digits ko di gaye **** ise savdhani se use karein ****

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'))


//**************MATHS*****************
console.log(Math)

console.log(Math.abs(-4))  // gives the absolute value
console.log(Math.round(4.3)) //gives the round off
console.log(Math.ceil(4.2)) //gives the closest next integer
console.log(Math.floor(4.8)) //gives the closest previous intger 
console.log(Math.min(4,3,6,8,1)) // gives the minimum value 
console.log(Math.max(2,3,4,6,8))

console.log(Math.random()) // iski value 0 se 1 ke bich lie kregi ,,,, can be used to make games like dice wale , jaha pe hume value set krni ho
console.log((Math.random()*10)+1) //lies between 1 to 10
console.log(Math.floor(Math.random()*10)+1)



const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // Formula to get a random value bw min and max (agar game banana ho to)



