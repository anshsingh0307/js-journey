// "Reduce" method

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator , currentValue){
    console.log(`accumulator: ${accumulator} and current value is: ${currentValue}`)
    return accumulator + currentValue
}, 3)
// here 3 is the initial value that goes in the accumulator only for the first iteration
console.log(myTotal);


// Other way (by using arrow function)

const yourTotal = myNums.reduce( (accumulator , currentValue) => accumulator + currentValue , 3)
// here also 3 is the initial value
console.log(yourTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (accumulator , item) => accumulator + item.price, 0)
console.log(priceToPay)
