const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros) //push uses the same array 

//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)  //concat returns a new array 
// console.log(allHeros)

// spread operator 
// const allNewHeros = [...marvel_heros , ...dc_heros ] //works same as concatenate
// console.log(allNewHeros)

// const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray)



console.log(Array.isArray("Ansh"))    //checks if it is an array or not 
console.log(Array.from("Ansh"))  //converts anything into an array 
console.log(Array.from({name:"ansh"}))     //interesting case 

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1 , score2 , score3))