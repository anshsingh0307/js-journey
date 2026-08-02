const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (hehe) {
   // console.log(hehe);
} )


coding.forEach( (hehe) => {
  //  console.log(hehe)
})

function printMe(item){
  //  console.log(item)
}
coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
  //  console.log(item, index, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})