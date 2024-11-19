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

