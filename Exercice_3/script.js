const textGreen = document.querySelector('#carreVert');
const textRed = document.querySelector('#carreRouge');
const textBlue = document.querySelector('#carreBleu');
const text = document.querySelector('#text');


textGreen.addEventListener('click', handleColorGreen);
function handleColorGreen() {
    text.classList.remove('textred', 'textblue');
    text.classList.add('textgreen');
};

textRed.addEventListener('click', handleColorRed);
function handleColorRed() {
    text.classList.remove('textgreen', 'textblue');
    text.classList.add('textred');
};

textBlue.addEventListener('click', handleColorBlue);
function handleColorBlue() {
    text.classList.remove('textred', 'textgreen');
    text.classList.add('textblue');
};

