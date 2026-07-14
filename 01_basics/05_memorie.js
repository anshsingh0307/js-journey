/*Two types of memories
1.Stack ---->>>>> In Primitive data types (COPY OF DATA IS PASSED) hence original value is not changed
2.Heap ----->>>>> In Non-Primitive data types (REFERENCE OF DATA IS PASSED) hence original value is changed
*/

//Understanding call by value (Stack)
let myName="Ansh Singh"
let anotherName=myName 
anotherName="J"

console.log(anotherName)
console.log(myName)

//Understanding call by reference (Heap)

let user1 = {
    email: "ansh@google.com",
    upi: "user@ybl",
}

let user2 =user1

user2.email="ansh2@google.com"

console.log(user1.email)
console.log(user2.email)