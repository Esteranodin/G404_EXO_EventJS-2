const imageHover = document.querySelector('#image1')
console.log(imageHover);

imageHover.addEventListener('mouseenter', handleMouseEnter);

function handleMouseEnter(event) {
    const imgTag = event.target;
    imgTag.style.border = '3px, solid, red';
};

imageHover.addEventListener('mouseleave', handleMouseLeave);

function handleMouseLeave(event) {
    const imgTag = event.target;
    imgTag.style.border = 'none';
};

