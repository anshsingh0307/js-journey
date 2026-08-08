const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault() ;    //It is used to stop the default process kyuki form ka default process server pe send krna hota h but here we dont want that

    const height = parseInt(document.querySelector('#height').value )       // to get the value of heigth as an input
    const weight = parseInt(document.querySelector('#weight').value )
    const results =document.querySelector('#results')

    if(height ===' ' || height < 0 || isNaN(height)){
            results.innerHTML = "Please give a valid height"
    }
    else if(weight ===' ' || weight < 0 || isNaN(weight)){
            results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
})