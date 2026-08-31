let a = 300 
if(true){
    let a=10 
    const b = 20 
    console.log("INNER : " ,  a)
}
console.log("Outer : " , a)

function one (){
    const username = "Ansh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}
one();


if(true){
    const username = "ansh"
    if(username=="ansh"){
        const website = " youtube"
        console.log(username + website);
    }
}


// *********** Interesting ************

console.log(addone(5))
function addone(value){
    return value+1 
}


console.log(addTwo(5))  // declaration se pehle value nahi mil skti agar function aise declare kiya toh 
const addTwo = function(value){
    return value+2
}

//These were the two ways to declare a function and see how one worked and other one didn't 