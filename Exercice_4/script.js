const buttonVerif = document.querySelector('form button');

buttonVerif.addEventListener('click', handleCompare);

function handleCompare(){
  const inputPassWord = document.querySelector('#password');
  const inputConfirm = document.querySelector('#confirmPassword')  
  
  if (inputPassWord.value === inputConfirm.value){
    inputPassWord.classList.add('borderGreen');
    inputConfirm.classList.add('borderGreen');   
    inputPassWord.classList.remove('borderRed');
    inputConfirm.classList.remove('borderRed');
  }

  else {
    inputPassWord.classList.add('borderRed');
    inputConfirm.classList.add('borderRed'); 
    inputPassWord.classList.remove('borderGreen');
    inputConfirm.classList.remove('borderGreen');
  };
}

// possible de faire une variable booléenne ou dedans on met la compraison du if et on stocke me résultat qui pourra être réutiliser dans une autre fonctionqui change couleur bordures