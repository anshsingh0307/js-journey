const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click',function(ansh){
    console.log(ansh)
    console.log(ansh.target)
    if(ansh.target.id == 'grey'){
    body.style.backgroundColor = ansh.target.id;
    }

    if(ansh.target.id == 'white'){
      body.style.backgroundColor = ansh.target.id;
      }

      if(ansh.target.id == 'blue'){
        body.style.backgroundColor = ansh.target.id;
        }

        if(ansh.target.id == 'yellow'){
          body.style.backgroundColor = ansh.target.id;
          }
  })
});
