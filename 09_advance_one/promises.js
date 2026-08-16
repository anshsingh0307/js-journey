const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()                                        // it connects resolve with '.then'
    }, 1000)
})

promiseOne.then(function(){                              // then is related to "resolve"
    console.log("Promise consumed") ; 
})


// Another way to do it (without storing it in a new variable)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve() 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved ;")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ansh", email: "ansh@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "ansh", password: "123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

//  Chaining
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){                  // .catch is used to handle errors or 'reject'
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))                              // finally tells if it is reolved or rejected 


const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})


// async and await are like resolve and reject

async function consumePromiseFive(){
  try {
    const response = await promiseFive                 // jo jo chize time lagati h uske aage await lagado
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

//Using fetch by async and await
async function getAllUsers(){
    try{
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log("E: ", error)
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error) => console.log(error))