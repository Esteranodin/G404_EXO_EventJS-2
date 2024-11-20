const ancreHide = document.querySelector('#hide');
const ancreDisplay = document.querySelector('#display');

ancreHide.addEventListener('click', handleHide);
function handleHide() {
    const textNone = document.querySelector('#text');
    textNone.style.display = 'none';
};

ancreDisplay.addEventListener('click', handleDisplay);
function handleDisplay() {
    const text = document.querySelector('#text');
    text.style.display = 'block';
};

// bonne pratique est de mettre la constante qui selectionne le texte et la declarer que dans la focntion qui l'utilise car si un utilisateur n'en a pas besoin le code ne se déclenche pas