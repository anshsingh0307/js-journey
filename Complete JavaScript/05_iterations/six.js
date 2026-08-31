// for each loop doesnt return anything  , here is the example

const coding = ["cpp", "java", "python"]

const values = coding.forEach( (item) => {
    return item
})
console.log(values)

// so to return a value , we use "filter" ,  it takes a condition and return the values if they staisfy the condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNums.filter( (num) => num>4 )
console.log(newNums)

//second way
const yourNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums2 = yourNums.filter( (num) => {
    return num > 4 
} )
console.log(newNums2)


// using for each loop
const yewoh = []
myNums.forEach( (num) => {
    if(num > 4 ){
        yewoh.push(num)
    }
} )
console.log(yewoh)



