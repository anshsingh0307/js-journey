const name = "ansh"
const repoCount= 5 

console.log(name + repoCount + "Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //String interpolation

const gameName=new String('Free Fire')  // another way to declare string

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('I'))

const newString= gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(-8,3)
console.log(anotherString)

const newString1 = "    ansh singh    "
console.log(newString1)
console.log(newString1.trim()) // removes all the spaces of the beginning and the end (not of the middle one)

const url="https://ansh.com/ansh%29singh"
console.log(url.replace('%29','-'))

console.log(url.includes('ansh')) // tells if the string contains the searched element or not 

console.log(gameName.split(' ')) // split the string on the basis of given condition (here space) and returs the array 
