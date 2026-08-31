// for in loop
// objects can be iterated using for in loop 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
}


const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United States of America")
map.set('FR' , "France")
map.set('IN' , "INDIA")

for (const key in map) {
    console.log(map)
}
// nothing will be printed since map is not iterable