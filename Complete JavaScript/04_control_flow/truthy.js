const userEmail = "ansh@gmail.com"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have the user email . ")
}


/*
 ------------ Falsy values --------------
 false , 0 , -0 , BigInt , "" , null , undefined , NaN 
 
 
 ------------ Truthy values -------------
 "0" , 'false' , " " , [] , {} , function(){}  
 
 */


 const emptyObj = {}

 if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
 }


 // Nullish Coalescing Operator (??): null , undefined
 
 // It is used as a fallback agar api call me null values aaye to usse bachna kaise hai , null naa leke dusri value le lete hai


 let val1 ; 
 // val1 =  5 ?? 10                //iska output 5 hoga
 // val1 = null ?? 10              // iska output 10 hoga 
 // val1 = undefined ?? 15            // iska 15 hoga
 val1 = null ?? 10 ?? 15

 console.log(val1) ;




// Ternary operator (?)

const iceTeaPrice  = 100 
iceTeaPrice >= 80 ? console.log("True") : console.log("False")