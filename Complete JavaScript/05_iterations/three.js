// for-of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hellow lodu!"
for(const hehe of greetings){
    // console.log(`Each char is ${hehe}`)
}


// Maps
// Stores unique values and in the same order 

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United States of America")
map.set('FR' , "France")
map.set('IN' , "INDIA")

console.log(map)

for (const [key , value] of map) {
    console.log(key, ':-', value)
}


const myObject = {
    'Game1': 'NFS', 
    'Game2': 'Spiderman'
}

/* 
for (const [key, value] of myObject) {
    console.log(key, ':-', value)
}
                  but object is not iterable like this */