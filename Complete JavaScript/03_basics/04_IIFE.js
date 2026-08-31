// Immediately Invoked Function Expressions (IIFE)
/*To stop pollution from the global scope in a function we use iife , we wrap the whole function inside an ()
 Jo function immediately execute ho jaye use iife kehte h */

(function chai(){                         // this is named iife
    console.log(`DB connected`);
})();                        //semicolon laga kyuki multiple iife hai                 // alag se function call krne ki jarurt nahi padi automatic call hogya definition ke baad hi 

( (name) => {                                   // this is un-named iife and isme parameter bhi h 
    console.log(`DB cconnected ${name}`) ;
})("Ansh")


/// Remember that agar multiple iife use krna hai to har iife ke baad ; lagana jaruri hai warna error aayega 
