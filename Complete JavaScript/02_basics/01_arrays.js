// Arrays

const myArr = [0, 1, 2, 3, 4 ,5]
// console.log(myArr[0])

const myHeros=[ "Shaktiman" , "Ansh"]

const myArr2 = new Array (1,2,3,4) // another way to declare an array 

//Array methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    // adds 9 in the starting of the array 
// myArr.shift()       // removes the starting element

//console.log(myArr.includes(9))  //tells if the array has 9 or not
//console.log(myArr.indexOf(5))

// const newArr = myArr.join()  // the type of array changes to string'
// console.log(myArr)
// console.log(newArr)


// ************ Lets study about slice and splice **************
console.log("A ",myArr)

const myn1= myArr.slice(1,3)
console.log("B ",myArr)
console.log(myn1)



const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)